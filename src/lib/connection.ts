import {
  doc,
  collection,
  addDoc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import { initializeApp, getApps } from 'firebase/app';
import { syncGameState, syncPeerPlayer } from './game_state';
import type { GameState, PeerPlayerState } from './game_state';
import { getIsHost, setIsHost } from "../globals";

const firebaseConfig = {
  apiKey: "AIzaSyBsCTqTEJxsBYGhShNeOetUxTUTHFF7u0o",
  authDomain: "svelte-game-43670.firebaseapp.com",
  projectId: "svelte-game-43670",
  storageBucket: "svelte-game-43670.appspot.com",
  messagingSenderId: "409471071554",
  appId: "1:409471071554:web:b367f616e61129bbcc84db",
  measurementId: "G-74YW1ZVH2W"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

const db = getFirestore();
const pc = initRemoteConnection();

function initRemoteConnection() {
  const connection = new RTCPeerConnection(servers);
  connection.ondatachannel = (dcEvent) => {
    if (dcEvent.channel.label === GAME_STATE_DC_LABEL) {
      gameStateDataChannel = dcEvent.channel;
      // Listen on the peer player to synchronize the game state.
      if (!getIsHost()) {
        gameStateDataChannel.addEventListener("message", (event: MessageEvent) => {
          syncGameState(event.data);
        });
      }
    } else if (dcEvent.channel.label === PEER_PLAYER_DC_LABEL) {
      peerPlayerDataChannel = dcEvent.channel;
      // Listen on the host player to synchronize the peer player.
      if (getIsHost()) {
        peerPlayerDataChannel.addEventListener("message", (event: MessageEvent) => {
          syncPeerPlayer(event.data);
        });
      }
    }
  };
  return connection;
}

const GAME_STATE_DC_LABEL = "game_state";
let gameStateDataChannel: RTCDataChannel;
const PEER_PLAYER_DC_LABEL = "peer_player_state";
let peerPlayerDataChannel: RTCDataChannel;

export async function createLobby() {
  setIsHost(true);

  // Need to create data channel before offers.
  gameStateDataChannel = pc.createDataChannel(GAME_STATE_DC_LABEL);

  const lobbyDoc = doc(collection(db, "lobbies"));

  const offerCandidates = collection(lobbyDoc, "offerCandidates");
  const answerCandidates = collection(lobbyDoc, "answerCandidates");

  const lobbyId = lobbyDoc.id;
  console.log(lobbyId);

  // Get candidates for caller, save to db
  pc.onicecandidate = (event) => {
    event.candidate && addDoc(offerCandidates, event.candidate.toJSON());
  };

  // Create offer
  const offerDescription = await pc.createOffer({
    offerToReceiveAudio: true,
  });
  await pc.setLocalDescription(offerDescription);

  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type,
  };

  await setDoc(lobbyDoc, { offer });

  // Listen for remote answer
  onSnapshot(lobbyDoc, (snapshot) => {
    const data = snapshot.data();
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(data.answer);
      pc.setRemoteDescription(answerDescription);
    }
  });

  // When answered, add candidate to peer connection
  onSnapshot(answerCandidates, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const candidate = new RTCIceCandidate(change.doc.data());
        pc.addIceCandidate(candidate);
      }
    });
  });

  return lobbyId;
}

export async function joinLobby(lobbyId: string) {
  setIsHost(false);

  peerPlayerDataChannel = pc.createDataChannel(PEER_PLAYER_DC_LABEL);

  const lobbyDoc = doc(collection(db, "lobbies"), lobbyId);
  const answerCandidates = collection(lobbyDoc, "answerCandidates");
  const offerCandidates = collection(lobbyDoc, "offerCandidates");

  pc.onicecandidate = (event) => {
    event.candidate && addDoc(answerCandidates, event.candidate.toJSON());
  };

  const lobbyData = (await getDoc(lobbyDoc)).data();

  const offerDescription = lobbyData.offer;
  await pc.setRemoteDescription(
    new RTCSessionDescription(offerDescription)
  );

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const answer = {
    type: answerDescription.type,
    sdp: answerDescription.sdp,
  };

  await updateDoc(lobbyDoc, { answer });

  onSnapshot(offerCandidates, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      console.log(change);
      if (change.type === "added") {
        let data = change.doc.data();
        pc.addIceCandidate(new RTCIceCandidate(data));
      }
    });
  });
}

// Send game state update from host to peer player.
export function sendGameUpdate(update: GameState) {
  if (gameStateDataChannel.readyState === "open") {
    gameStateDataChannel.send(JSON.stringify(update));
  }
}

// Send peer player state update from peer player to host.
export function sendPeerPlayerUpdate(update: PeerPlayerState) {
  if (peerPlayerDataChannel.readyState === "open") {
    peerPlayerDataChannel.send(JSON.stringify(update));
  }
}
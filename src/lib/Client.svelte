<script lang="ts">
  import { CONTEXT } from "../main";
  import {
    doc,
    collection,
    addDoc,
    setDoc,
    getDoc,
    onSnapshot,
    updateDoc,
  } from "firebase/firestore";
  import { dataChannel } from "./store";

  export let onLobbyConnected: () => void;

  let lobbyId = "";

  async function createLobby() {
    const lobbiesDoc = doc(collection(CONTEXT.db, "lobbies"));

    const offerCandidates = collection(lobbiesDoc, "offerCandidates");
    const answerCandidates = collection(lobbiesDoc, "answerCandidates");

    lobbyId = lobbiesDoc.id;

    // Get candidates for caller, save to db
    CONTEXT.pc.onicecandidate = (event) => {
      event.candidate && addDoc(offerCandidates, event.candidate.toJSON());
    };

    // Create offer
    const offerDescription = await CONTEXT.pc.createOffer();
    await CONTEXT.pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await setDoc(lobbiesDoc, { offer });

    // Listen for remote answer
    onSnapshot(lobbiesDoc, (snapshot) => {
      const data = snapshot.data();
      if (!CONTEXT.pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        CONTEXT.pc.setRemoteDescription(answerDescription);
      }
    });

    // When answered, add candidate to peer connection
    onSnapshot(answerCandidates, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const candidate = new RTCIceCandidate(change.doc.data());
          CONTEXT.pc.addIceCandidate(candidate);
        }
      });
    });
  }

  async function joinLobby() {
    const lobbyDoc = doc(collection(CONTEXT.db, "lobbies"), lobbyId);
    const answerCandidates = collection(lobbyDoc, "answerCandidates");
    const offerCandidates = collection(lobbyDoc, "offerCandidates");

    CONTEXT.pc.onicecandidate = (event) => {
      event.candidate && addDoc(answerCandidates, event.candidate.toJSON());
    };

    const lobbyData = (await getDoc(lobbyDoc)).data();

    const offerDescription = lobbyData.offer;
    await CONTEXT.pc.setRemoteDescription(
      new RTCSessionDescription(offerDescription)
    );

    const answerDescription = await CONTEXT.pc.createAnswer();
    await CONTEXT.pc.setLocalDescription(answerDescription);

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
          CONTEXT.pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
    startTransmitting();
    onLobbyConnected();
  }

  function startTransmitting() {
    dataChannel.set(CONTEXT.pc.createDataChannel("data"));
  }
</script>

<div>
  <h2>Create a new Lobby</h2>
  <button on:click={createLobby}>Create Lobby</button>

  <h2>Join a Lobby</h2>

  <input type="string" bind:value={lobbyId} />
  <button on:click={joinLobby}>Join</button>
</div>

<style>
</style>

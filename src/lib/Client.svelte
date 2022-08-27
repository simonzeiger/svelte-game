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
  let showClient = true;

  // Set datachannel for remote connection (the client that didnt create the lobby).
  CONTEXT.pc.ondatachannel = (dcEvent) => {
    console.log("dc set for remote");
    dataChannel.set(dcEvent.channel);
  };

  dataChannel.set(CONTEXT.pc.createDataChannel("data"));

  async function createLobby() {
    const lobbyDoc = doc(collection(CONTEXT.db, "lobbies"));

    const offerCandidates = collection(lobbyDoc, "offerCandidates");
    const answerCandidates = collection(lobbyDoc, "answerCandidates");

    lobbyId = lobbyDoc.id;
    console.log(lobbyId);

    // Get candidates for caller, save to db
    CONTEXT.pc.onicecandidate = (event) => {
      event.candidate && addDoc(offerCandidates, event.candidate.toJSON());
    };

    // Create offer
    const offerDescription = await CONTEXT.pc.createOffer({
      offerToReceiveAudio: true,
    });
    await CONTEXT.pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await setDoc(lobbyDoc, { offer });

    // Listen for remote answer
    onSnapshot(lobbyDoc, (snapshot) => {
      console.log(
        "On Snaphshot 1",
        CONTEXT.pc.currentRemoteDescription,
        snapshot.data()
      );
      const data = snapshot.data();
      if (!CONTEXT.pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        CONTEXT.pc.setRemoteDescription(answerDescription);
      }
    });

    // When answered, add candidate to peer connection
    onSnapshot(answerCandidates, (snapshot) => {
      console.log("On Snaphshot 2");
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const candidate = new RTCIceCandidate(change.doc.data());
          CONTEXT.pc.addIceCandidate(candidate);
        }
      });
    });

    onLobbyConnected();
  }

  async function joinLobby() {
    const lobbyDoc = doc(collection(CONTEXT.db, "lobbies"), lobbyId);
    const answerCandidates = collection(lobbyDoc, "answerCandidates");
    const offerCandidates = collection(lobbyDoc, "offerCandidates");

    CONTEXT.pc.onicecandidate = (event) => {
      console.log("this bitch aint working");
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
      console.log("On Snaphshot 3", snapshot, snapshot.docChanges());
      snapshot.docChanges().forEach((change) => {
        console.log(change);
        if (change.type === "added") {
          let data = change.doc.data();
          CONTEXT.pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });

    onLobbyConnected();
  }
</script>

{#if showClient}
  <div>
    <h2>Create a new Lobby</h2>
    <button on:click={createLobby}>Create Lobby</button>

    <h2>Join a Lobby</h2>

    <input type="string" bind:value={lobbyId} />
    <button on:click={joinLobby}>Join</button>
  </div>
{/if}

<style>
</style>

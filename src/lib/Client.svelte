<script lang="ts">
  import { joinLobby, createLobby } from "./connection";

  export let onLobbyConnected: (lobbyId: string) => void;

  let lobbyId = "";
</script>

<div>
  <h2>Create a new Lobby</h2>
  <button
    on:click={async () => {
      lobbyId = await createLobby();
      navigator.clipboard.writeText(lobbyId);
      onLobbyConnected(lobbyId);
    }}>Create Lobby</button
  >

  <h2>Join a Lobby</h2>

  <input type="string" bind:value={lobbyId} />
  <button
    on:click={() => {
      joinLobby(lobbyId);
      onLobbyConnected(lobbyId);
    }}>Join</button
  >
</div>

<style>
</style>

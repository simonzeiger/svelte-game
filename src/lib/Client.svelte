<script lang="ts">
  import { joinLobby, createLobby } from "./connection";

  export let onLobbyConnected: (lobbyId: string, fromPeer?: boolean) => void;

  let lobbyId = "";
</script>

<div class="flex items-center justify-center h-screen">
  <div class="flex-col border-2 p-5 rounded">
    <div class="items-center">
      <h2>Start a new game</h2>
      <button
        class="btn btn-blue"
        on:click={async () => {
          lobbyId = await createLobby();
          onLobbyConnected(lobbyId);
        }}>Create Lobby</button
      >
    </div>

    <div>
      <h2>Join a Lobby</h2>

      <input
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="string"
        bind:value={lobbyId}
      />
      <button
        class="btn btn-blue"
        on:click={() => {
          joinLobby(lobbyId);
          onLobbyConnected(lobbyId, true);
        }}>Join</button
      >
    </div>
  </div>
</div>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>

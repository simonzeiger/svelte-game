<script lang="ts">
  import Client from "./lib/Client.svelte";
  import Game from "./lib/Game.svelte";

  let lobbyConnected = false;
  let lobbyId = "";
  function onLobbyConnected(lobbyIdForGame?: string) {
    lobbyConnected = true;
    lobbyId = lobbyIdForGame;
  }
</script>

<main>
  {#if !lobbyConnected}
    <Client {onLobbyConnected} />
  {:else}
    <Game {lobbyId} />
  {/if}
</main>

<style>
</style>

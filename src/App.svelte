<script lang="ts">
  import Client from "./lib/Client.svelte";
  import Game from "./lib/Game.svelte";

  let lobbyConnected = false;
  function onLobbyConnected() {
    lobbyConnected = true;
  }
</script>

<main>
  {#if !lobbyConnected}
    <Client {onLobbyConnected} />
  {:else}
    <Game />
  {/if}
</main>

<style>
</style>

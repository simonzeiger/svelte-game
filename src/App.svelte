<script lang="ts">
  import Client from "./lib/Client.svelte";
  import { peerConnectedPromise } from "./lib/connection";
  import Game from "./lib/Game.svelte";
  import Lobby from "./lib/Lobby.svelte";

  let lobbyConnected = false;
  let lobbyId = "";
  let fromPeer = false;
  let peerConnected = false;

  function onLobbyConnected(lobbyIdForGame?: string, wasFromPeer = false) {
    lobbyConnected = true;
    lobbyId = lobbyIdForGame;
    fromPeer = wasFromPeer;
  }

  peerConnectedPromise.then(() => {
    peerConnected = true;
  });
</script>

<main>
  {#if !lobbyConnected}
    <Client {onLobbyConnected} />
  {:else if fromPeer}
    <Game />
  {:else}
    <Lobby {lobbyId} />
    {#if peerConnected}
      <Game />
    {/if}
  {/if}
</main>

<style>
</style>

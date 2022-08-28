<script lang="ts">
  import {
    getIsHost,
    sendGameUpdate,
    sendPeerPlayerUpdate,
  } from "./connection";

  export let lobbyId: string;

  let localDivColor = "black",
    peerDivColor = "black";

  function localDivClicked() {
    if (getIsHost()) {
      sendGameUpdate({
        playerState: {
          direction: [1, 0],
          pos: [1, 15],
          health: 3,
          isDead: false,
        },
        enemyStates: new Map([
          [0, { health: 4, isDead: false, direction: [0, 4], pos: [5, 5] }],
        ]),
        mapState: { mapGrid: [] },
      });
    } else {
      sendPeerPlayerUpdate({
        direction: [0, 0],
        pos: [1, 2],
        health: 3,
        isDead: false,
      });
    }
  }
</script>

<div>Game</div>
<p>Local</p>
<div on:click={localDivClicked} style:background-color={localDivColor} />
<p>Peer</p>
<div style:background-color={peerDivColor} />

<style>
  div {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
</style>

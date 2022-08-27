<script lang="ts">
  // let canvas: HTMLCanvasElement;

  let localDivColor = "black",
    peerDivColor = "black";
  function localDivClicked() {
    localDivColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
</script>

<div>Game</div>
<p>Local</p>
<div style:background-color={localDivColor} on:click={localDivClicked} />
<p>Peer</p>
<div style:background-color={peerDivColor} />

<!-- <canvas bind:this={canvas} /> -->
<style>
  div {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
</style>

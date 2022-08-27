<script lang="ts">
  import { dataChannel } from "./store";
  import { CONTEXT } from "../main";

  let localDivColor = "black",
    peerDivColor = "black";

  function localDivClicked() {
    localDivColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if ($dataChannel && $dataChannel.readyState === "open") {
      $dataChannel.send(localDivColor);
    }
  }

  dataChannel.subscribe((channel) => {
    channel.addEventListener("message", (event: MessageEvent) => {
      peerDivColor = event.data;
    });
  });
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

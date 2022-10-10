<script lang="ts">
  import { initGame } from "../phaser";
  import {
    isGameOver,
    didWin,
    playAgain,
    lobbyDialogState,
    LobbyDialogState,
  } from "./game_state";
  import Counter from "./Counter.svelte";

  initGame();
</script>

{#if $isGameOver}
  <div class="flex items-center justify-center h-screen">
    <div class="flex-col border-2 p-5 rounded">
      <div class="items-center">
        <h2>You {$didWin ? "won!" : "lost!"}</h2>
        <h2>Game restarting in:</h2>
        <Counter
          on:completed={() => {
            isGameOver.set(false);
            playAgain();
          }}
        />
      </div>
    </div>
  </div>
{/if}

<div id="game" />

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

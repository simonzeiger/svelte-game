<script lang="ts">
  import { peerConnectedPromise } from "./connection";
  import { lobbyDialogState, LobbyDialogState } from "./game_state";

  export let lobbyId: string | undefined;

  function copyLobbyId() {
    navigator.clipboard.writeText(lobbyId);
  }

  peerConnectedPromise.then(() => {
    $lobbyDialogState = LobbyDialogState.HIDDEN;
  });
</script>

{#if $lobbyDialogState !== LobbyDialogState.HIDDEN}
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg font-medium leading-6 text-gray-900"
                  id="modal-title"
                >
                  Waiting for other player...
                </h3>

                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {#if $lobbyDialogState === LobbyDialogState.WITH_LOBBY_ID}
                      Send your friend the lobby id so the match can begin.
                    {:else}
                      Make sure your friend hits play again!
                    {/if}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {#if $lobbyDialogState === LobbyDialogState.WITH_LOBBY_ID}
            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                on:click={copyLobbyId}
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              >
                <svg
                  class="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48"
                  style="zoom:0.5;margin-right:10px"
                  ><path
                    d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z"
                  /></svg
                >
                Copy
              </button>
              <div>
                <div class="align-start">
                  {lobbyId}
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

<script>
  import { createEventDispatcher } from "svelte";
  import { onMount, onDestroy, afterUpdate } from "svelte";

  const TIMER_LENGTH = 5;
  let countDown = TIMER_LENGTH;
  const dispatch = createEventDispatcher();
  let timer = null;

  onMount(() => {
    const initialTime = Date.now();
    timer = setInterval(() => {
      const now = Date.now();
      // Find the distance between now and the count down date
      const delta = now - initialTime;
      const seconds = Math.floor((delta % (1000 * 60)) / 1000);
      countDown = TIMER_LENGTH - seconds;
    }, 100);
  });

  onDestroy(() => {
    if (timer) {
      clearInterval(timer);
    }
  });

  $: {
    if (countDown === 0) {
      clearInterval(timer);
      timer = null;
      dispatch("completed");
    }
  }
</script>

<div>
  {countDown}
</div>

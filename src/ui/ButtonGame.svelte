<script>
  export let btnVal;

  // props
  export let rock;
  export let paper;
  export let scissors;
  export let btnImgBg;
</script>

<main class="mt-12 sm:mt-20 flex items-center justify-center space-x-12 sm:space-x-20">
  <button
    onclick={() => btnVal('rock')}
  >
    <img src={rock} alt="rock"
    class={`${btnImgBg} w-16 sm:w-32 cursor-pointer rounded-full p-3 sm:p-6`}
    >
  </button>

  <button
    onclick={() => btnVal('paper')}
  >
    <img src={paper} alt="paper"
    class={`${btnImgBg} w-16 sm:w-32 cursor-pointer rounded-full p-3 sm:p-6`}
    >
  </button>

  <button
    onclick={() => btnVal('scissors')}
  >
    <img src={scissors} alt="scissors"
    class={`${btnImgBg} w-16 sm:w-32 cursor-pointer rounded-full p-3 sm:p-6`}
    >
  </button>
</main>
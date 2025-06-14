<script>
  export let rock;
  export let paper;
  export let scissors;

  // imported components and UIs
  import ButtonGame from '../ui/ButtonGame.svelte';

  // props
  export let instructionTxt;
  export let instructionBgGame;
  export let textWhite;
  export let textBlack;
  export let btnImgBg;
  export let btnVal;
  export let userImgpick;
  export let comImgpick;
  export let result;
  export let score;
  export let isResult;

  function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    alert('Game reset')
  }

</script>

<main class="mt-10">
  <section class={instructionBgGame}>
    <div class={`py-8 sm:py-10 mt-12 max-w-6xl sm:mx-auto px-3`}>
      <p class={`${textWhite} text-center text-sm sm:text-lg font-medium`}> 
        {instructionTxt}
      </p>

      <!-- this is where the button image is displayed -->
    <ButtonGame {rock} {paper} {scissors} {btnImgBg} btnVal = {btnVal}/>

      <!-- displays the result and score in template -->
      
      {#if isResult}
        <div class={`${textWhite} flex items-center justify-center mt-10 text-lg sm:text-2xl font-medium`}>
          {`You picked`}
          <img src = {userImgpick} alt = 'userImgpick' 
            class="w-10 sm:w-12"
          />
          {`Computer picked`}
          <img src = {comImgpick} alt = 'userImgpick' 
            class="w-10 sm:w-12"
          />
        </div>
        <p class={`${textWhite} text-center font-medium`}>{result}</p>

        <p class={`${textWhite} text-lg text-center mt-2 sm:mt-4 font-medium space-x-3`}>Wins: <span class={textBlack}> {score.wins} </span> Losses: <span class={textBlack}> {score.losses} </span> Ties: <span class={textBlack}> {score.ties} </span></p>
      {/if}
      
    </div>

  </section>
  <div class="w-fit mx-auto p-8 justify-between text-lg font-medium">
      <button onclick={resetScore} class={`${btnImgBg} ${textWhite} px-3 py-2 rounded-xl cursor-pointer`}>reset</button>
  </div>
</main>
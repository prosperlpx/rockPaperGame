<script>
  import WelcomPlayersInputBox from "../components/WelcomPlayersInputBox.svelte";
  import ImgFade from "../components/ImgFade.svelte";

  
</script>

<main class="grid place-items-center  w-full">
  
    <div class={`relative mt-40 sm:my-50 p-6 sm:p-6 flex flex-col items-center`}>

      <div class="absolute -top-3 bg-black p-4 rounded-full">
        <ImgFade />
      </div>

      <div>
        <div class="text-white w-80 sm:w-2xl bg-black px-4 py-12 sm:mt-12 rounded-xl">
        <h2 class="text-3xl font-bold text-center pt-3">Welcome to the Rock, Paper, Scissors Game.</h2>

        <WelcomPlayersInputBox />
        </div>
      </div>
    </div>
  

</main>
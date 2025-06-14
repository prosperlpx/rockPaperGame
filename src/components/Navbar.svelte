<script>
  import rock from '../assets/img/rock-emoji.png'
  import paper from '../assets/img/paper-emoji.png'
  import scissors from '../assets/img/scissors-emoji.png'

  export let navbarBg;
  export let textWhite;
  export let toggleImg;

  export let setToggleMode;
</script>

<main class={`${navbarBg} sticky z-10 top-0`}>
  <header class="flex justify-between items-center px-12">
    <div class={` flex items-center justify-center py-4 gap-4`}>
      <img src={rock} alt="paper" class="w-6 sm:w-12">
      <img src={paper} alt="paper" class="w-6 sm:w-12">
      <img src={scissors} alt="paper" class="w-6 sm:w-12">
      <p class={`${textWhite} text-lg sm:text-2xl font-medium`}>Game</p>
    </div>

    
    <button onclick={() => setToggleMode()} class="cursor-pointer p-2 rounded-xl  my-auto bg-white">
    <img src={toggleImg} alt="" class="w-6">
    </button> 

</header>
</main>
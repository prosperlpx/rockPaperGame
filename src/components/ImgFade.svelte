<script>
  import {onMount} from 'svelte';

  import paper from '../assets/img/paper-emoji.png'
  import rock from '../assets/img/rock-emoji.png'
  import scissors from '../assets/img/scissors-emoji.png'

  let images = [
    paper,
    rock,
    scissors
  ]

  let currentIndex = 0;
  let direction = 'left';

  onMount(
    () => {
      const interval = setInterval(
        () => {
          if(direction === 'left'){
            currentIndex = (currentIndex + 1) % images.length;
          }else{
            currentIndex = (currentIndex - 1 + images.length) % images.length
          }
        }, 1000
      );

      return() => clearInterval(interval);
    }
  );


</script>

<main>
  <div class="w-10 h-10 sm:w-20 sm:h-20 relative overflow-hidden rounded-lg">
    <div>
      {#each images as image, index}
      {#if index === currentIndex}
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img
        src={image}
        alt="slider image"
        class=" transition-opacity duration-500"
        />
      {/if}
      {/each}
    </div>
  </div>
    
  
</main>
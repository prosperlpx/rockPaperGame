<script>
  import {onMount} from 'svelte';
  import {userName} from '../lib/store/Stores.js'
  
  $: isEnable = /^[a-zA-Z]{5,}$/.test(inputValue)
  let href = '#/GamePage'
  let inputElement;
  let inputValue = '';
  

  // when the page mounts it runs and keeps the input active
  onMount(
    () => {
      if (inputElement){
        inputElement.focus();
      }
    }
  )

  function btnClick(){
    if(isEnable){
      userName.set(inputValue)
    }else{
      alert('Username can only be alphabets and more than 4')
      inputValue = ''
    }
  }

  function handleKeydown(event){
    if(event.key === 'Enter'){
      event.preventDefault();
      btnClick();
    }
  }


  function handleClick(event){
    event.preventDefault();
    btnClick()
  }
</script>

<form action="" class="py-4 w-full flex flex-col sm:flex-row gap-2 items-center">

  <input type="text" placeholder="Players Name" required bind:this={inputElement} bind:value={inputValue} class="p-2 w-full border-amber-50 border-solid" onkeydown={handleKeydown}>

  {#if isEnable}
  <a href={href} onclick={btnClick} class="p-3 bg-indigo-500 font-medium">
    Play 
  </a>
  {:else}
  <a href='#/' onclick={(event) => handleClick(event)} class="p-3 bg-indigo-500 font-medium">
    Play 
  </a>
  {/if}
  
</form>


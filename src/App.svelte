<script>
  // imported assets
  import rock from './assets/img/rock-emoji.png'
  import paper from './assets/img/paper-emoji.png'
  import scissors from './assets/img/scissors-emoji.png'
  import lightMode from './assets/img/brightness.png'
  import darkMode from './assets/img/night-mode.png'


  // import external components
  import Navbar from "./components/Navbar.svelte";
  import GamePlay from "./components/GamePlay.svelte";
  import Footer from './components/Footer.svelte';
  
  // variables for the game
  let gameHeading = 'This is a Rock Paper Scissors game';
  let instructionTxt = 'Instruction: You pick either Rock, Paper, or Scissors then Computer randomly picks and the result is displayed.'

  let bg = 'bg-white';
  let navbarBg = 'bg-blue-300';
  let textWhite = 'text-white';
  let textBlack = 'text-black';
  let spanColor = 'text-slate-400';
  let instructionBgGame = 'bg-teal-800';
  let btnImgBg = 'bg-black';
  let footerText = 'text-black';
  let isToggle = false;
  let isResult = false;
  let toggleImg = darkMode;

  $: userImgpick = undefined;
  $: comImgpick = undefined;
  $: result = undefined;
  $: score = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  function handleToggle(){
    isToggle =  !isToggle;

    if(isToggle){
      // this is dark until the icon is clicked
      toggleImg = lightMode
      bg = 'bg-black';
      textBlack = 'text-white';
      btnImgBg = 'bg-white';
      textWhite = 'text-black';
      instructionBgGame = 'bg-teal-600';
      footerText = 'text-white';
      navbarBg = 'bg-slate-400'
      console.log('set the variables so it looks like dark mode')
    }
    else if(!isToggle){
      // this is white until the icon is clicked
      toggleImg = darkMode;
      bg = 'bg-white'
      textBlack = 'text-slate-800';
      btnImgBg = 'bg-black';
      textWhite = 'text-white';
      navbarBg = 'bg-blue-300';
      instructionBgGame = 'bg-teal-700';
      footerText = 'text-black';
    }
  }

  // this runs the function
  function runGame(pick){
    isResult = true;
    // this function gets the computer pick
    userPick()
    function comPick(){
      let randomNo = Math.ceil(Math.random() * 9);
      if(randomNo > 0 && randomNo < 4){
        comImgpick = rock;
      }
      else if(randomNo >= 4 && randomNo < 7){
        comImgpick = paper;
      }
      else if(randomNo >= 7 && randomNo <= 9){
        comImgpick = scissors;
      }
      
    }

    // this function compares the pick with computer pick and returns a result
    function userPick(){
      comPick()
      if(pick === 'rock'){
        userImgpick = rock;
        if(comImgpick === rock){
          result = 'A tie';
          score.ties += 1;
        }
        else if(comImgpick === paper){
          result = 'You Lose';
          score.losses += 1;
        }
        else if(comImgpick === scissors){
          result = 'You Win';
          score.wins += 1;
        }
      }

      if(pick === 'paper'){
        userImgpick = paper;
        if(comImgpick === paper){
          result = 'A tie';
          score.ties += 1;
        }
        else if(comImgpick === rock){
          result = 'You Win';
          score.wins += 1;
        }
        else if(comImgpick === scissors){
          result = 'You Lose';
          score.losses += 1;
        }
      }

      if(pick === 'scissors'){
        userImgpick = scissors;
        if(comImgpick === scissors){
          result = 'A tie';
          score.ties += 1;
        }
        else if(comImgpick === rock){
          result = 'You Lose';
          score.losses += 1;
        }
        else if(comImgpick === paper){
          result = 'You Win';
          score.wins += 1;
        }
      }
    

    }
  }  

</script>

<main class={bg}>
  <Navbar {navbarBg} {textWhite} setToggleMode = {handleToggle} {toggleImg}/>

  <!-- this is the heading for the game -->
  <p class={`text-5xl sm:text-7xl text-center font-bold my-20 sm:max-w-2/3 sm:mx-auto px-2 ${textBlack}`}>{gameHeading.slice(0,10)} <span class={`${spanColor}`}>{gameHeading.slice(10, 29)}</span> {gameHeading.slice(29)}</p>

  <GamePlay {instructionTxt} {instructionBgGame} {rock} {paper} {scissors} {textWhite} {btnImgBg} {textBlack} {userImgpick} {result} {score} {comImgpick} btnVal={runGame} {isResult} />

  <Footer {footerText} {navbarBg} />
</main>
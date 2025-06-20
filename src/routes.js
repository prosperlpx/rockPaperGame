import Home from './pages/Welcome.svelte';
import GamePage from './pages/GamePage.svelte';
import NotFound from './pages/NotFound.svelte'

 const routes = {
    '/': Home,
    '/GamePage': GamePage,
    '*': NotFound
  };

export default routes;
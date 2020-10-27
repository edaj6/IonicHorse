<script>
  // pages
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Items from "./pages/Items.svelte";
  import Login from "./pages/Login.svelte";
  import NotFound from "./pages/NotFound.svelte";

  // router
  import { Router, Route, Link } from "svelte-routing";

  // components
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Sidebar from "./components/Navbar/Sidebar.svelte";

// alert
  import Alert from "./components/Alert.svelte";

// global store
   import globalStore from "./stores/globalStore";
</script>

<Router>
  <Navbar />

  {#if $globalStore.sidebar}
    <Sidebar />
  {/if}
  {#if $globalStore.alert}
    <Alert />
  {/if}
  <Route path="/" component={Home} />
  <Route path="about" component={About} />
  <Route path="items" component={Items} />
  <Route path="login" component={Login} />
  <Route path="*" component={NotFound} />
</Router>


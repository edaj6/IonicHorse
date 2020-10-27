<script>
import { onMount } from "svelte";
    onMount(async () => {
    const response = await fetch(
      `https://sveltehorsefunctionapp.azurewebsites.net/api/wake`,
    );    
  });
</script>

<svelte:head>
  <title>Ionic / Svelte UI - Smartlearning learn</title>
</svelte:head>

  <h1>
    Home page
  </h1>
<p>
      Testing svelte/ionic with identity server, azure functions and storage
</p> 


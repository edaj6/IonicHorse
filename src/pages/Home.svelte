<script>
  import { onMount } from "svelte";
  import loginUser from "../apis/loginUser";

  //wake up services
  onMount(async () => {
    const response = await fetch(
      `https://sveltehorsefunctionapp.azurewebsites.net/api/wake`
    );
    await loginUser("", "");
  });
</script>

<h1>Home page</h1>

<p>Testing svelte with identity server, azure functions and storage</p>

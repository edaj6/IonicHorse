<script>
  import user from "../stores/user";
  import { navigate } from "svelte-routing";

  $: username = $user.username;

  function buttonClicked() {
    console.log("buttonClicked");
    if (username) {
      navigate("/user");
    } else {
      navigate("/login");
    }
  }
</script>

<ion-button fill="outline" on:click={buttonClicked}>
  <ion-icon slot="end" color name="person-circle" />
  {#if username}
    {username.substring(0, 1).toUpperCase()}
  {/if}
</ion-button>

<script>
  import user from "../stores/user";
  import { link } from "svelte-routing";
  import { logoutUser } from "../stores/user";
  import globalStore from "../stores/globalStore";

  let navLink;

</script>

{#if $user.jwt}
  <a
    href="/"
    class="logout-btn"
    on:click={() => {
      logoutUser();
      globalStore.toggleItem('sidebar', false);
    }}>
    logout
  </a>
{:else}
  <a href="/login">login</a>
{/if}

<!-- on:click={() => {
      globalStore.toggleItem('sidebar', false);
    }} -->

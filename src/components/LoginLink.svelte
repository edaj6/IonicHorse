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
    logout {$user.username.substring(0, 1)}
  </a>
{:else}
  <a href="/login">login</a>
{/if}

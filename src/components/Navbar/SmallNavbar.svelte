<script>
  import globalStore from "../../stores/globalStore";
  import user from "../../stores/user";
  import LoginButton from "./../LoginButton.svelte";

  let openSidebar = globalStore.toggleItem;
</script>

<nav class="navbar">
  <div class="nav-center">
    <!-- sidebar toggle -->
    <button
      class="btn-sidebar-toggle"
      aria-label="Sidebar Menu"
      on:click={() => {
        openSidebar('sidebar', true);
      }}>
      <i class="fas fa-bars" />
    </button>
    <ion-toolbar mode="ios">
      <ion-title>{$globalStore.selectedPage}</ion-title>

      <ion-buttons slot="primary">
      <LoginButton/>
  </ion-buttons>
    </ion-toolbar>
  </div>
</nav>

<script>
  import globalStore from "../../stores/globalStore";
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
    </ion-toolbar>
    <!-- logo -->
    <!-- <a href="/" use:link class="nav-logo">
      <img src="/assets/images/logo.svg" class="logo" alt="razors logo" />
    </a> -->
  </div>
</nav>

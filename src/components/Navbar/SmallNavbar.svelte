<script>
  import globalStore from "../../stores/globalStore";
  import user from "../../stores/user";

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
    <ion-button fill="outline">
      <ion-icon slot="end" color name="person-circle"></ion-icon>
      {$user.username.substring(0, 1).toUpperCase()}
    </ion-button>
  </ion-buttons>
    </ion-toolbar>
  </div>
</nav>

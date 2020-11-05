<script>
  import globalStore from "../../stores/globalStore";
  import user from "../../stores/user";
  import LoginButton from "./../LoginButton.svelte";

  let openSidebar = globalStore.toggleItem;
</script>
<style>
  ion-title{
      text-transform: capitalize;
  }
</style>

<ion-header>
  <ion-toolbar mode="ios">
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
      <ion-title>{$globalStore.selectedPage}</ion-title>

      <ion-buttons slot="primary">
        <LoginButton />
      </ion-buttons>
    </div>

  </ion-toolbar>
</ion-header>

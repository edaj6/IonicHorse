<script>
  //   import CartButton from "../Cart/CartButton.svelte";
  import { link } from "svelte-routing";
  import links from "../../constants/links";
  import LoginLink from "../LoginLink.svelte";
</script>

<ion-toolbar>

    <ion-buttons slot="secondary">
      <ion-button>
        <a href={"/"} use:link>Home</a>
      </ion-button>
    </ion-buttons>

    <ion-buttons slot="secondary">
      <ion-button>
        <a href={"/items"} use:link>Items</a>
      </ion-button>
    </ion-buttons>
 
  <ion-buttons slot="secondary">
      <ion-button>
        <a href={"/about"} use:link>About</a>
      </ion-button>
    </ion-buttons>

  <ion-title>Smart App</ion-title>
</ion-toolbar>

<!-- <nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <!-- nav links -->
<!-- <ul class="nav-links">
        {#each links as navLink}
          <li>
            <a href={navLink.url} use:link>{navLink.text}</a>
          </li>
        {/each}
      </ul> -->
<!-- nav logo -->
<!-- <a href="/" use:link class="nav-logo big-logo">
        <img src="/assets/images/logo.svg" class="logo" alt="razors logo" />
      </a> -->
<!-- cart toggle -->
<!-- <div class="nav-aside">
        <LoginLink /> -->
<!-- <CartButton /> -->
<!-- </div>
    </div>
  </div>
</nav> -->

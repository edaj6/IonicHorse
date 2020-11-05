<script>
  //   import CartButton from "../Cart/CartButton.svelte";
  import { link } from "svelte-routing";
  import links from "../../constants/links";
  import LoginLink from "../LoginLink.svelte";
</script>

<ion-header>
  <ion-toolbar>
    <div class="nav-center">
      <!-- nav links -->
      <ul class="nav-links">
        {#each links as navLink}
          <li>
            <a href={navLink.url} use:link>{navLink.text}</a>
          </li>
        {/each}
      </ul>
      <!-- nav logo -->
      <a href="/" use:link class="nav-logo big-logo">
        <img src="/assets/images/logo.svg" class="logo" alt="razors logo" />
      </a>
      <!-- cart toggle -->
      <div class="nav-aside">
        <LoginLink />
        <!-- <CartButton /> -->
      </div>
    </div>


  </ion-toolbar>
</ion-header>

<!-- <nav class="navbar">
  <div class="nav-container">



  </div>
</nav> -->

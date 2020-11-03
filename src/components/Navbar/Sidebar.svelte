<script>
  import links from "../../constants/links";
  import { link } from "svelte-routing";
  import globalStore from "../../stores/globalStore";
  import { fly, fade } from "svelte/transition";
  import LoginLink from "../LoginLink.svelte";
  import {clickOutside} from '../Helpers/clickOutside.js';

	function handleClickOutside(event) {
		globalStore.toggleItem('sidebar', false);
  }

</script>

<div class="sidebar-container" in:fly={{ x: -1000 }} out:fade >
  <div class="sidebar" transition:fade={{ delay: 300 }} use:clickOutside on:click_outside={handleClickOutside}>
    <!-- header -->
    <div class="sidebar-header">
      <button
        class="btn-close"
        on:click={() => {
          globalStore.toggleItem('sidebar', false);
        }}>
        <i class="fas fa-window-close" />
      </button>
    </div>
    <!-- site logo -->
    <img
      src="/assets/images/logo.svg"
      class="logo sidebar-logo"
      alt="razors logo" />
    <!-- links -->
    <ul class="sidebar-links">
      {#each links as sideLink}
        <li>
          <a
            href={sideLink.url}
            use:link
            on:click={() => {
              globalStore.toggleItem('sidebar', false);
              $globalStore.selectedPage = sideLink.text;
            }}>
            { sideLink.text }
          </a>
        </li>
      {/each}
      <li>
        <LoginLink />
      </li>
    </ul>
  </div>
</div>

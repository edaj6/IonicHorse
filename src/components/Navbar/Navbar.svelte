<script>
  import SmallNavbar from "./SmallNavbar.svelte";
  import BigNavbar from "./BigNavbar.svelte";
  import globalStore from "../../stores/globalStore";

  let screenWidth = 0;
  let isLarge = false;

  $: isLarge = screenWidth > 992;

  if (isLarge) {
    globalStore.toggleItem("sidebar", false);
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if isLarge}
  <BigNavbar />
{:else}
  <SmallNavbar />
{/if}
{screenWidth}
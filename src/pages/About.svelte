<script>
  import Skeleton from "../components/Skeleton.svelte";
  import { blur, slide, scale, fade, fly } from "svelte/transition";
  import { getData } from "../components/fetcher";
  const response = getData(
    "https://sveltehorsefunctionapp.azurewebsites.net/api/person"
  );

  let title = "Personer";
  let url_default =
    "https://storagejakob.blob.core.windows.net/blob-container-test/default-horse.jpg";
</script>

<ion-content>

<h1>About page</h1>

  <p>Udviklere på dette projekt (data fra dotnet azure function/cosmos db)</p>


{#await $response}
  <Skeleton repeat={8} />
{:then data}
  {#each data as { firstName, lastName, birthday, url }, index}
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Udvikler</ion-card-subtitle>
        <ion-card-title>{firstName} {lastName}</ion-card-title>
      </ion-card-header>

      <ion-card-content>Point denne måned: {birthday}</ion-card-content>
    </ion-card>
  {/each}
{:catch e}
  <div class="box effect2">
    <div class="right">
      <h3>0</h3>
    </div>
    <h4 in:blur>Error loading data</h4>
    <p in:blur>{e}</p>
  </div>
{/await}
</ion-content>
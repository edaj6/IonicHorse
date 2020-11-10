<script>
  import Skeleton from "../components/Skeleton.svelte";
  import { blur, slide, scale, fade, fly } from "svelte/transition";
  import { getData } from "../components/fetcher";
  let response;

  const refresher = document.querySelector('ion-refresher')

  function doRefresh(event) {
    console.log("Do refresh");

    response = getData(
      "https://sveltehorsefunctionapp.azurewebsites.net/api/person"
    );

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }

  export let title = "About page";
  let url_default =
    "https://storagejakob.blob.core.windows.net/blob-container-test/default-horse.jpg";
</script>

<ion-content class="app-page">

  <ion-content>
    <ion-refresher slot="fixed" on:ionRefresh={doRefresh}>
      <ion-refresher-content />
    </ion-refresher>
  </ion-content>

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

        <ion-card-content>
          Ansat siden starten af 2000, det ser rigtig godt ud..
          <br />
          Point denne måned:
          <br />
          {birthday}
        </ion-card-content>
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

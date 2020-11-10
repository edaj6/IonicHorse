<script>
  import { onMount } from "svelte";
  import loginUser from "../apis/loginUser";
  import globalStore from "../stores/globalStore";

  let email = "none@none";
  let password = "none";

  //wake up services
  onMount(async () => {
    if ($globalStore.doMakeWakeApiCall) {
      console.log("make call to wake api/cosmos db, remove in production");
      const response = await fetch(
        `https://sveltehorsefunctionapp.azurewebsites.net/api/wake`
      );

      console.log("make login to wake api/sqlserver, remove in production");
      await loginUser({ email, password });

      globalStore.toggleItem("doMakeWakeApiCall", false);
    }
    else{
      console.log("No wake api call");
    }
  });
</script>

<ion-content>
  <p>Testing svelte with identity server, azure functions and storage</p>

  <ion-card>

    <ion-card-header>
      <ion-card-subtitle>Arkitetk</ion-card-subtitle>
      <ion-card-title>John Doe</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
      Madison was named the capital of the Wisconsin Territory in 1836.
    </ion-card-content>

  </ion-card>

</ion-content>

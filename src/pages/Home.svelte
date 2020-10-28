<script>
  import { onMount } from "svelte";
  import loginUser from "../apis/loginUser";
  import Footer from "../components/Footer.svelte";

  let email = "none";
  let password = "no";

  //wake up services
  onMount(async () => {
    const response = await fetch(
      `https://sveltehorsefunctionapp.azurewebsites.net/api/wake`
    );
    await loginUser({ email, password });
  });
</script>

<ion-content class="app-page">
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

<script>
  import user from "../stores/user";
  import { navigate } from "svelte-routing";

  $: username = $user.username;
</script>

<ion-content class="app-page">

  {#if username}
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Ændre/slet bruger</ion-card-subtitle>
        <ion-card-title>Bruger</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Din profil er linked til 3 søgninger, data
        <br />
        Username: {username}
      </ion-card-content>
    </ion-card>
    {:else}
    <p>Ikke logget ind, gå til login</p>
  {/if}

</ion-content>

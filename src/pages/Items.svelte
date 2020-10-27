<script>
  import { blur, slide, scale, fade, fly } from 'svelte/transition';
  let url_default = "https://storagejakob.blob.core.windows.net/blob-container-test/default-horse.jpg"

</script>
<ion-content>

<h1>Items page</h1>

<ion-card>
    <img src={url_default} alt="hest" />
    <ion-card-header>
      <ion-card-subtitle>Arkitetk</ion-card-subtitle>
      <ion-card-title>John Doe</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
      Madison was named the capital of the Wisconsin Territory in 1836.
    </ion-card-content>
  </ion-card>

<ion-card>
    <img src={url_default} alt="hest 2" />
    <ion-card-header>
      <ion-card-subtitle>Hest</ion-card-subtitle>
      <ion-card-title>Jane</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
      Madison was named the capital of the Wisconsin Territory in 1836.
    </ion-card-content>
  </ion-card>
</ion-content>

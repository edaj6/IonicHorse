<script>
  import { blur, slide, scale, fade, fly } from 'svelte/transition';
  let url_default = "https://storagejakob.blob.core.windows.net/blob-container-test/default-horse.jpg"

</script>
<ion-content class="app-page">

<ion-card>
    <img src="https://cdn.pixabay.com/photo/2020/10/27/14/59/deer-5691010_1280.jpg" alt="dyr" />
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
    <img src="https://cdn.pixabay.com/photo/2020/09/18/12/16/jewel-beetle-5581683_1280.jpg" alt="dyr 2" />
    <ion-card-header>
      <ion-card-subtitle>Development</ion-card-subtitle>
      <ion-card-title>Jane</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
      Madison was named the capital of the Wisconsin Territory in 1836.
    </ion-card-content>
  </ion-card>

  <ion-card>
    <img src="https://cdn.pixabay.com/photo/2020/10/31/20/23/lighthouse-5702233_1280.jpg" alt="ikke dyr" />
    <ion-card-header>
      <ion-card-subtitle>Wiz</ion-card-subtitle>
      <ion-card-title>J</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
      Madison was named the capital of the Wisconsin Territory in 1836.
    </ion-card-content>
  </ion-card>
</ion-content>

<style>

/* On mouse-over, add a deeper shadow */
ion-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.8);
}

</style>

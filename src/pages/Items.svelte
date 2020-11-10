<script>
  import { blur, slide, scale, fade, fly } from "svelte/transition";
  import Card from "../components/Card/Card.svelte";

  function doRefresh(event) {
    console.log('Do refresh');

    setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
  }
</script>

<ion-content class="app-page">

  <ion-refresher slot="fixed" on:ionRefresh={doRefresh}>
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <Card
    likes="4"
    lastchange="200"
    img="https://cdn.pixabay.com/photo/2020/10/10/21/54/performers-5644247_1280.jpg">
    <span slot="content">Først rejste jeg tilbage og så frem igen.. crazy</span>
  </Card>

  <Card
    likes="5"
    comments="10"
    lastchange="3"
    img="https://cdn.pixabay.com/photo/2020/09/18/12/16/jewel-beetle-5581683_1280.jpg">
    <span slot="content">Capital of the Wisconsin</span>
  </Card>

  <Card
    likes="5"
    comments="10"
    lastchange="8762"
    img="https://cdn.pixabay.com/photo/2020/10/27/14/59/deer-5691010_1280.jpg">
    <span slot="content">
      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
      Madison was named the capital of the Wisconsin Territory in 1836.
    </span>
  </Card>

</ion-content>

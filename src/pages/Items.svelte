<script>
  import { blur, slide, scale, fade, fly } from "svelte/transition";
  import Card from "../components/Card/Card.svelte";

  function doRefresh(event) {
    console.log('Do refresh');

    setTimeout(() => {
        console.log('Async operation has ended');
        // console.log(event);
        // console.log(event.target);
        event.target.complete();
      }, 2000);
  }
</script>

<ion-content>

  <ion-refresher slot="fixed" on:ionRefresh={doRefresh}>
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <Card
    likes="4"
    lastchange="200"
    img="https://storagejakob.blob.core.windows.net/blob-images/horse1.jpg">
    <span slot="content">Første klasses hest, 6 gangarter. Pris 2.000.000</span>
  </Card>

  <Card
    likes="5"
    comments="10"
    lastchange="3"
    img="https://storagejakob.blob.core.windows.net/blob-images/horse2.jpg">
    <span slot="content">Sød og rolig børnepony. Han er sød, rar og nem i håndtering både derhjemme og i byen</span>
  </Card>

  <Card
    likes="2"
    comments="11"
    lastchange="8762"
    img="https://storagejakob.blob.core.windows.net/blob-images/horse3.jpg">
    <span slot="content">
      En kvalitetspony. Vallak på 2 1/2 år sættes nu til salg. Søger du fremtidens pony du selv ønsker at forme? Pris 100.000
    </span>
  </Card>

</ion-content>


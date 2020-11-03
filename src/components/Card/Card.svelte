<script>
  export let img =
    "https://cdn.pixabay.com/photo/2020/09/18/12/16/jewel-beetle-5581683_1280.jpg";
  export let likes = 0;
  export let comments = 0;
  export let lastchange = 0;

//   let url_default =
//     "https://storagejakob.blob.core.windows.net/blob-container-test/default-horse.jpg";
</script>

<style>
  .missing {
    color: #999;
  }

  /* On mouse-over, add a deeper shadow */
  ion-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
  }
</style>

<ion-card>
  <img src={img} alt="avatar" />

  <ion-card-content>
    <p>
      <slot name="content">
        <p class="missing">No content</p>
      </slot>
    </p>
  </ion-card-content>

  <ion-row>
    <ion-col>
      <ion-button icon-start fill="clear" size="small">
        <ion-icon name="thumbs-up-outline" />
        <div>{likes} Likes</div>
      </ion-button>
    </ion-col>
    <ion-col>
      <ion-button icon-start fill="clear" size="small">
        <ion-icon name="chatbubbles-outline" />
        <div>{comments} Comments</div>
      </ion-button>
    </ion-col>
    <ion-col>
      <ion-button icon-start fill="clear" size="small">
        <ion-icon name="pulse-outline" size="small" />
        <div>{lastchange}h ago</div>
      </ion-button>
    </ion-col>
  </ion-row>

</ion-card>

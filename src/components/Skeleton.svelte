<script>
  export let repeat = 5;
</script>

{#each Array(repeat) as _}
  <ion-item>
    <ion-thumbnail slot="start">
      <ion-skeleton-text />
    </ion-thumbnail>
    <ion-label>
      <h3>
        <ion-skeleton-text animated style="width: 80%" />
      </h3>
      <p>
        <ion-skeleton-text animated style="width: 60%" />
      </p>
      <p>
        <ion-skeleton-text animated style="width: 30%" />
      </p>
    </ion-label>
  </ion-item>
{/each}

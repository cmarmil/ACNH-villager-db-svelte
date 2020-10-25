<script>
  import { favoriteVillagers, setFavorites } from "./stores.js";

  let downloadedImages = {};

  const fetchIcon = async function (url, id) {
    let src;
    //if we've already grabbed the blob, don't fetch it again.
    if (downloadedImages.hasOwnProperty(id)) {
      src = downloadedImages[id];
    } else {
      src = await fetch(url)
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          var img = URL.createObjectURL(blob);
          return img;
        });

      downloadedImages[id] = src;
    }
    return src;
  };

  function deleteVillager(villager) {
    setFavorites(false, villager);
  }
</script>

<style>
  /* Bulma over-ride */
  .box {
    margin-bottom: 0.5em !important;
  }
  .villager-icon {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1em;
  }

  .dreamie-card {
    display: flex;
    flex-wrap: wrap;
    min-height: 17vh;
    margin: 1em auto;
    justify-content: center;
    padding: 0.5em;
    margin: 0.5em 0;
  }

  .image,
  .placeholder {
    width: 4em;
  }
</style>

<div class="dreamie-card box">
  {#each $favoriteVillagers as villager, i (villager.id)}
    <div class="villager-icon">
      {#await fetchIcon(villager['icon_uri'], villager.id)}
        <figure class="image is-square placeholder">
          <img src={'images/spinner.gif'} alt="loading spinner" />
        </figure>
      {:then img}
        <a
          role="button"
          tabindex="0"
          class="delete is-small"
          on:click={() => deleteVillager(villager)} />
        <figure class="image is-square">
          <img src={img} alt="icon of {villager.name['name-USen']}" />
        </figure>
      {/await}
    </div>
  {/each}
</div>

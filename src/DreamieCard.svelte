<script>
  import { favoriteVillagers } from "./stores.js";
  import LoadingGraphic from "./LoadingGraphic.svelte";

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
</script>

<style>
  .villager-icon {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1em;
  }

  .dreamie-card {
    display: flex;
    flex-wrap: wrap;
    min-height: 15vh;
  }

  .image {
    width: 3em;
  }
</style>

<div class="dreamie-card box">
  {#each $favoriteVillagers as villager, i (villager.id)}
    <div class="villager-icon">
      {#await fetchIcon(villager['icon_uri'], villager.id)}
         <figure class="image is-128x128 placeholder">
          <LoadingGraphic viewbox={"0 0 128 128"}/>
        </figure>
      {:then img}
        <figure class="image is-square">
            <LoadingGraphic viewbox={"0 0 60 60"}/>
          <!-- <img src={img} alt="icon of {villager.name['name-USen']}" /> -->
        </figure>
      {/await}
    </div>
  {/each}
</div>

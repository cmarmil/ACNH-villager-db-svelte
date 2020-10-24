<script>
  import { favoriteVillagers } from "./stores.js";

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
    margin: 0 1em;;
  }

  .dreamie-card {
    display: flex;
    flex-wrap: wrap;
    min-height: 15vh;
    width: 95%;
    margin: 1em auto;
    justify-content: center;
  }

  .image,
  .placeholder {
    width: 3em;
  }
</style>

<div class="dreamie-card box">
  {#each $favoriteVillagers as villager, i (villager.id)}
    <div class="villager-icon">
      {#await fetchIcon(villager['icon_uri'], villager.id)}
        <figure class="image is-square placeholder">
          <img src={'images/spinner.gif'} alt="loading spinner"/>
        </figure>
      {:then img}
        <figure class="image is-square">
          <img src={img} alt="icon of {villager.name['name-USen']}" />
        </figure>
      {/await}
    </div>
  {/each}
</div>

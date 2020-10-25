<script>
  import FavoriteBtn from "./FavoriteBtn.svelte";
  import { fetchedVillagerImages } from "./stores";
  export let villager;

  const fetchImage = async function (url, id) {
    let src;
    //if we've already grabbed the blob, don't fetch it again.
    if ($fetchedVillagerImages.hasOwnProperty(id)) {
      src = $fetchedVillagerImages[id];
    } else {
      src = await fetch(url)
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          var img = URL.createObjectURL(blob);
          return img;
        });

      $fetchedVillagerImages[id] = src;
    }
    return src;
  };
</script>

<style>
  /* bulma over-ride */
  .box:last-child {
    margin-bottom: 1.5em;
  }
  .villager-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1em;
  }
  p {
    text-align: center;
  }
  .placeholder {
    margin: 0 auto;
    align-items: center;
    display: flex;
    width: auto !important;
  }
  .card-footer {
    display: flex;
    align-items: center;
  }
</style>

<div class="box villager-card">
  {#await fetchImage(villager['image_uri'], villager.id)}
    <figure class="image is-128x128 placeholder">
      <img src={'images/spinner.gif'} alt="loading spinner" />
    </figure>
  {:then img}
    <figure class="image is-square">
      <img src={img} alt="image of {villager.name['name-USen']}" />
    </figure>
  {/await}
  <div class="card-footer">
    <FavoriteBtn {villager} />
    <p>{villager.name['name-USen']}</p>
  </div>
</div>

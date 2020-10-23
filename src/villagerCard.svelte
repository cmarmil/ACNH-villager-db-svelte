<script>
  import LoadingGraphic from "./LoadingGraphic.svelte";
  export let villager, i;

  const fetchImage = async function (url, i) {
    const src = await fetch(url)
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        var img = URL.createObjectURL(blob);
        return img;
      });
    return src;
  };
</script>

<style>
  .box:last-child {
    margin-bottom: 1.5em;
  }
  .villager-card {
    cursor: pointer;
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
</style>

<div tabindex="0" class="box villager-card">
  {#await fetchImage(villager['image_uri'], i)}
    <figure class="image is-128x128 placeholder">
      <LoadingGraphic />
    </figure>
  {:then img}
    <figure class="image is-square">
      <img src={img} alt="image of {villager.name['name-USen']}" />
    </figure>
  {/await}
  <p>{villager.name['name-USen']}</p>
</div>

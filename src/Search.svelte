<script>
  let searchStr = "";
  import { renderedVillagers, villagers } from "./stores.js";

  function search(e) {
    if (e.type === "keypress" && e.keyCode === 13) {
      let matchingVillager = $villagers.filter((villager) => {
        return villager.name["name-USen"].toLowerCase() === searchStr;
      });
      $renderedVillagers = matchingVillager;
    }
  }
</script>

<style>
  .field {
    width: 90%;
    margin: 0 auto;
  }
</style>

<div class="field">
  <div class="control">
    <input
      class="input is-primary"
      type="text"
      placeholder="Search"
      on:keypress={search}
      bind:value={searchStr} />
  </div>
</div>

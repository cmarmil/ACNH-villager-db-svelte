<script>
  let searchStr = "";
  import store from "./stores.js";

  function search(e) {
    if (e.type === "keypress" && e.keyCode === 13) {
      let matchingVillager = $store.villagers.filter((villager) => {
        return villager.name["name-USen"].toLowerCase() === searchStr;
      });
      $store.renderedVillagers = matchingVillager;
    }
  }
  
</script>

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

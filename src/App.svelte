<script>
  import VillagerCard from "./villagerCard.svelte";
  import Search from "./Search.svelte";
  import Tabs from "./Tabs.svelte";
  import { onMount } from "svelte";

  let villagers = [];
  let renderedVillagers = [];
  let searchTerm = "";

  onMount(async () => {
    const res = await fetch(`https://acnhapi.com/v1a/villagers/`);
    villagers = await res.json();
    //render the villagers for the default active tab, Alligators.
    let initialRendered = villagers.filter((villager) => {
      return villager.species === "Alligator";
    });

    renderedVillagers = initialRendered;
  });

  function handleSearch(event) {
    searchTerm = event.detail.searchStr;
    let matchingVillager = villagers.filter((villager) => {
      return villager.name["name-USen"].toLowerCase() === searchTerm;
    });
    if (matchingVillager) {
      renderedVillagers = matchingVillager;
    }
  }

  function handleNewActiveTab(event) {
    let activeTab = event.detail.activeTab;
    let matchingVillagers = villagers.filter((villager) => {
      return villager.species === activeTab;
    });
    renderedVillagers = matchingVillagers;
  }
</script>

<style>
  .card-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-auto-rows: max-content;
    height: 100vh;
    overflow: auto;
  }
  @media (max-width: 1024px) {
    .card-container {
      grid-template-columns: 50% 50% 50% 50%;
    }
  }

  @media (max-width: 758px) {
    .card-container {
      display: block;
    }
  }
</style>

<div>
  <div id="root">
    <Search on:search={handleSearch} />
    <div class="columns">
      <Tabs on:setActiveTab={handleNewActiveTab} />
      <div class="card-container column">
        {#each renderedVillagers as villager, i}
          <VillagerCard {villager} {i} />
        {/each}
      </div>
    </div>
  </div>
</div>

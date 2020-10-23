<script>
  import VillagerCard from "./VillagerCard.svelte";
  import Search from "./Search.svelte";
  import Tabs from "./Tabs.svelte";
  import DreamieCard from "./DreamieCard.svelte";
  import { onMount } from "svelte";
  import store from "./stores.js";

  onMount(async () => {
    const res = await fetch(`https://acnhapi.com/v1a/villagers/`);
    let villagers = await res.json();
    $store.villagers = villagers;
    //render the villagers for the default active tab, Alligators.
    let initialRendered = villagers.filter((villager) => {
      return villager.species === "Alligator";
    });
    $store.renderedVillagers = initialRendered;
  });
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
    <DreamieCard />
    <Search />
    <div class="columns">
      <Tabs />
      <div class="card-container column">
        {#each $store.renderedVillagers as villager, i}
          <VillagerCard {villager} {i} />
        {/each}
      </div>
    </div>
  </div>
</div>

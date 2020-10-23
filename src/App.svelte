<script>
  import VillagerCard from "./VillagerCard.svelte";
  import Search from "./Search.svelte";
  import Tabs from "./Tabs.svelte";
  import DreamieCard from "./DreamieCard.svelte";
  import { onMount } from "svelte";
  import { villagers, renderedVillagers } from "./stores.js";

  onMount(async () => {
    const res = await fetch(`https://acnhapi.com/v1a/villagers/`);
    let villagerData = await res.json();
    $villagers = villagerData;
    //render the villagers for the default active tab, Alligators.
    let initialRendered = $villagers.filter((villager) => {
      return villager.species === "Alligator";
    });
    $renderedVillagers = initialRendered;
  });
</script>

<style>
  .card-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-auto-rows: max-content;
    height: 75vh;
    overflow: auto;
  }

  .top-container {
    margin: 1em;
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

    <div class="columns">
      <Tabs />
      <div class="main-container column">
        <div class="top-container">
        <DreamieCard />
        <Search />
        </div>
        <div class="card-container">
          {#each $renderedVillagers as villager, i (villager.id)}
            <VillagerCard {villager} {i} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

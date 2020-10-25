<script>
  import VillagerCard from "./VillagerCard.svelte";
  import Search from "./Search.svelte";
  import SideMenu from "./SideMenu.svelte";
  import DreamieCard from "./DreamieCard.svelte";
  import Dropdown from "./Dropdown.svelte";
  import { onMount } from "svelte";
  import { renderedVillagers, getVillagers, favoriteVillagers } from "./stores.js";

  onMount(async () => {
    await getVillagers();
    
    if (!localStorage.length) {
      localStorage.setItem('favoriteVillagers', '[]');
    } else {
      $favoriteVillagers = JSON.parse(localStorage.getItem('favoriteVillagers'));
    }
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
    margin: .5em 1em 0 1em;
  }

  #root {
    height: 100vh;
    display: flex;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #f5f5f5;
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
    <SideMenu />
    <div class="main-container">
      <div class="top-container">
        <DreamieCard />
        <Search />
        <Dropdown />
      </div>
      <div class="card-container">
        {#each $renderedVillagers as villager (villager.id)}
          <VillagerCard {villager} />
        {/each}
      </div>
    </div>
  </div>
</div>

<script>
  import VillagerCard from "./villagerCard.svelte";
  import Search from "./Search.svelte";
  import { onMount } from "svelte";

  let villagers = [];

  onMount(async () => {
    const res = await fetch(`https://acnhapi.com/v1a/villagers/`);
    villagers = await res.json();
  });
</script>

<style>
  .card-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
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
    <Search />
    <div class="card-container">
      {#each villagers as villager, i}
		{#if villager.species === 'Anteater'}
		<VillagerCard villager={villager} i={i}/>{/if}
      {/each}
    </div>
  </div>
</div>

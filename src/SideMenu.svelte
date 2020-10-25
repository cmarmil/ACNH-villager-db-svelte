<script>
  import { searchTerm, species, speciesList } from "./stores.js";

  function setActiveSpecies(speciesStr) {
    $searchTerm = "";
    $species = speciesStr;
  }
</script>

<style>
  .menu {
    width: 25%;
    height: 100vh;
    overflow: auto;
    padding-top: 1em;
  }
  .menu-label {
    margin-left: 10px;
  }
  li {
    padding: 0.5em;
    cursor: pointer;
    padding-left: 1em;
  }
  li:hover {
    background: #f5f5f5;
  }
  .active-menu-item {
    background: #f5f5f5;
  }

  @media (max-width: 768px) {
    .menu {
      display: none;
    }
  }
</style>

<aside class="menu">
  <p class="menu-label">Species</p>
  <ul class="menu-list">
    {#each $speciesList as speciesStr, i}
      <li
        tabIndex="0"
        role="button"
        class={$species === speciesStr ? 'active-menu-item' : ''}
        on:click={() => setActiveSpecies(speciesStr)}
        on:keypress={() => setActiveSpecies(speciesStr)}>
        {speciesStr}
      </li>
    {/each}
  </ul>
</aside>

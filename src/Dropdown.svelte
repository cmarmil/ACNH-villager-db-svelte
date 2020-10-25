<script>
  import { searchTerm, species, speciesList } from "./stores.js";

  let menuOpen = false;
  let menu;
  function toggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
      menu.classList.add("is-active");
    } else {
      menu.classList.remove("is-active");
    }
  }
  function setActiveSpecies(speciesStr) {
    $searchTerm = "";
    $species = speciesStr;
    menu.classList.remove("is-active");
  }
</script>

<style>
  .dropdown button,
  .dropdown-menu {
    width: 100vw;
  }

  .dropdown-item {
    text-align: center;
    border-bottom: 1px solid #e6e3e3;
  }

  .dropdown-content {
    max-height: 70vh;
    overflow: scroll;
  }

  .icon {
      margin-left: 0 !important;
  }

  @media (min-width: 768px) {
    .dropdown {
      display: none;
    }
  }
</style>

<div class="dropdown" bind:this={menu}>
  <div class="dropdown-trigger">
    <button
      class="button"
      on:click={toggleMenu}
      aria-haspopup="true"
      aria-controls="dropdown-menu">
      <span>Species</span>
      <span class="icon is-small"> <span> &#9662;</span> </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      {#each $speciesList as speciesStr}
        <a
          href="#"
          class="dropdown-item"
          on:click={() => setActiveSpecies(speciesStr)}>{speciesStr}</a>
      {/each}
    </div>
  </div>
</div>

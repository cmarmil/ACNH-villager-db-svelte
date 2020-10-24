<script>
  import { searchTerm, species } from "./stores.js";
  const speciesList = [
    "Alligator",
    "Anteater",
    "Bear",
    "Bird",
    "Bull",
    "Cat",
    "Cub",
    "Chicken",
    "Cow",
    "Deer",
    "Dog",
    "Duck",
    "Elephant",
    "Eagle",
    "Frog",
    "Goat",
    "Gorilla",
    "Hamster",
    "Hippo",
    "Horse",
    "Koala",
    "Kangaroo",
    "Lion",
    "Monkey",
    "Mouse",
    "Octopus",
    "Ostrich",
    "Penguin",
    "Pig",
    "Rabbit",
    "Rhino",
    "Sheep",
    "Squirrel",
    "Tiger",
    "Wolf",
  ];

  let activeTab = "Alligator";

  function setActiveTab(speciesStr) {
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
    {#each speciesList as speciesStr, i}
      <li
        tabIndex="0"
        role="button"
        class={$species === speciesStr ? 'active-menu-item' : ''}
        on:click={() => setActiveTab(speciesStr)}
        on:keypress={() => setActiveTab(speciesStr)}>
        {speciesStr}
      </li>
    {/each}
  </ul>
</aside>

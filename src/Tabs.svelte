<script>
  import { renderedVillagers, villagers } from "./stores.js";
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

  function setActiveTab(e, species) {
    if (e.type === "keypress" && e.keyCode != 13) {
      return;
    }
    let matchingVillagers = $villagers.filter((villager) => {
      return villager.species === species;
    });
    $renderedVillagers = matchingVillagers;
    activeTab = species;
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
    {#each speciesList as species, i}
      <li
        tabIndex="0"
        role="button"
        class={activeTab === species ? 'active-menu-item' : ''}
        on:click={(e) => setActiveTab(e, species)}
        on:keypress={(e) => setActiveTab(e, species)}>
        {species}
      </li>
    {/each}
  </ul>
</aside>

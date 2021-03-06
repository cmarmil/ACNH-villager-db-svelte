import { get, writable, derived, readable } from 'svelte/store'

const { subscribe, set } = writable([])

export const villagers = { subscribe }
export const searchTerm = writable('')
export const species = writable('Alligator')
export const favoriteVillagers = writable([])
export const fetchedVillagerImages = writable({})

export const getVillagers = async () => {
  const response = await fetch('https://acnhapi.com/v1a/villagers/')
  const villagerData = await response.json()

  if (response.ok) {
    set(villagerData)
  }
}

export const renderedVillagers = derived(
  [villagers, species, searchTerm],
  ([$villagers, $species, $searchTerm]) => {
    return filterVillagers($villagers, $species, $searchTerm) || []
  },
)

export const setFavorites = (addVillager, villager) => {
    if (addVillager) {
      favoriteVillagers.update((favoriteVillagers) => [
        ...favoriteVillagers,
        villager,
      ])
    } else {
      let currentfavorites = get(favoriteVillagers)
      let filtered = currentfavorites.filter((favorite) => {
        return favorite.id != villager.id
      })
      favoriteVillagers.set(filtered)
    }
    localStorage.setItem('favoriteVillagers', JSON.stringify(get(favoriteVillagers)));
  }

function filterVillagers(villagers, species, searchTerm) {
  if (searchTerm) {
    let matchingVillager = villagers.filter((villager) => {
      return villager.name['name-USen'].toLowerCase() === searchTerm.toLowerCase();
    })
    return matchingVillager
  }
  if (species) {
    let filtered = villagers.filter((villager) => {
      return villager.species === species
    })
    return filtered
  }
}

export const speciesList = readable([
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
  ])

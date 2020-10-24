import { get, writable, derived } from 'svelte/store'

const { subscribe, set } = writable([])

export const villagers = { subscribe }

export const getVillagers = async () => {
  const response = await fetch('https://acnhapi.com/v1a/villagers/')
  const villagerData = await response.json()

  if (response.ok) {
    set(villagerData)
  }
}

export const searchTerm = writable('')
export const species = writable('Alligator')
export const favoriteVillagers = writable([])

export const renderedVillagers = derived(
  [villagers, species, searchTerm],
  ([$villagers, $species, $searchTerm]) => {
    return filterVillagers($villagers, $species, $searchTerm) || []
  },
)

function filterVillagers(villagers, species, searchTerm) {
  if (searchTerm) {
    let matchingVillager = villagers.filter((villager) => {
      return villager.name['name-USen'].toLowerCase() === searchTerm
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

export const setFavorites = (addVillager, villager) => {
  if (addVillager) {
    favoriteVillagers.update((favoriteVillagers) => [
      ...favoriteVillagers,
      villager,
    ])
  } else {
    let currentfavorites = get(favoriteVillagers)
    var id = villager.id
    let filtered = currentfavorites.filter((favorite) => {
      return favorite.id != villager.id
    })
    favoriteVillagers.set(filtered)
  }
}

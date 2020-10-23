import { writable } from 'svelte/store'
const store = writable({
    villagers: [],
    renderedVillagers: [],
    favoriteVillagers: []
});
export default store;
<script>
  import { searchTerm } from "./stores.js";
</script>

<style>
  .field {
    width: 90%;
    margin: 0 auto;
  }
</style>

<div class="field">
  <div class="control">
    <input
      class="input is-primary"
      type="text"
      placeholder="Search"
      bind:value={$searchTerm} />
  </div>
</div>

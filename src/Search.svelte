<script>
  import { searchTerm } from "./stores.js";
</script>

<div class="field">
  <div class="control">
    <input
      class="input is-primary"
      type="text"
      placeholder="Search"
      bind:value={$searchTerm} />
  </div>
</div>

<script>
  let searchStr = "";
  const dispatch = createEventDispatcher();
  import { createEventDispatcher } from "svelte";

  function search(e) {
    if (e.type === "keypress" && e.keyCode === 13) {
      dispatch("search", {
        searchStr: searchStr,
      });
    }
  }
</script>

<div class="field">
  <div class="control">
    <input
      class="input is-primary"
      type="text"
      placeholder="Search"
      on:keypress={search}
      bind:value={searchStr} />
  </div>
</div>

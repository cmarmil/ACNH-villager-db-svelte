<script>
  let activated = false;
  function setState() {
    activated = !activated;
  }
</script>

<style>
  button,
  button:active,
  button:hover {
    background: none;
    border: none;
  }

  svg {
    cursor: pointer;
  }
</style>

<button on:click={setState} class="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill={activated ? '#d63031' : '#b2bec3'}
    viewBox="0 0 24 24"><path
      d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
  </svg>
</button>

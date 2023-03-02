<script setup>
</script>

<template>
  <nav class="nav">
    <div class="nav__group">
      <div class="nav__group-item">
        <span class="material-symbols-outlined">
          HELP
        </span>
        Help
      </div>
      <div class="nav__group-item">
        <span class="material-symbols-outlined">
          account_circle
        </span>
        SIGN IN
      </div>
      <div class="nav__group-item">
        <span class="material-symbols-outlined">
          flag
        </span>
        <select
          id="language-select"
          class="nav__group-select"
          name="language"
        >
          <option value="en">
            EN
          </option>
          <option value="ch">
            CH
          </option>
        </select>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.nav {
  .nav__group {
    display: flex;
    justify-content: end;

    .nav__group-item {
      display: flex;
      /* flex-flow: row nowrap; */
      align-items: center;
      font-size: 1.5rem;
      padding: 1rem;

      span {
        font-size: 2rem;
        margin-right:0.5rem;
      }

      .nav__group-select {
        font-size: 1.5rem;
      }
    }
  }
}
</style>

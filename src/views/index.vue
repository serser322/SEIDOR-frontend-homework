<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <div class="page">
    <!-- <div class="navgation"> -->
    <NavBar />
    <!-- </div> -->

    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.page {
  display: flex;

  .view {
    margin: auto ;

    display: flex;
    &:before {
      content: '';
      display: block;
      width: 2rem;
    }
  }

  @media (min-width: 576px) {
    flex-direction: column;
  }
}
</style>

<template>
  <NavBar />
  <StepBar />
  <router-view />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import StepBar from './components/StepBar.vue'
</script>

<style lang="scss">
.root {}

* {
  font-family: 'Noto Sans TC', sans-serif;
}

/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>

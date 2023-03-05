<script setup>

</script>

<template>
  <router-view />
</template>

<style lang="scss">

:root {
  --primary: rgb(27,161,226);
  --secondary: rgb(9,130,240);
  --finish-color:rgb(96,169,23);
}

* {
  font-family: 'Noto Sans TC', sans-serif;
  box-sizing: border-box;
}

html {
  background-color: rgb(214, 214, 214);
  height: 100vh;
}

body {
  margin:0;
  height: 100vh;
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

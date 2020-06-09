<template>
  <div id="app">

    <Store></Store>
  </div>
</template>

<script>
import Store from './components/Store.vue'

export default {
  name: 'App',
  components: {
    Store
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>

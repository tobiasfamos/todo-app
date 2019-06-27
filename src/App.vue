<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import store from './Store/Store'
export default {
  name: 'App',
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display:flex;
  justify-content: center;
}
</style>

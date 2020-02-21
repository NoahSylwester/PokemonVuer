<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Dropdown :pokemonList="pokemonList"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Dropdown from './components/Dropdown.vue'
import pokemonList from './utils/pokemonList.json'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Dropdown
  },
  data() {
    return {
      pokemonList: pokemonList
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

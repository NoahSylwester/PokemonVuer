<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Dropdown :pokemonList="pokemonList" @switch-pokemon="switchPokemon"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Dropdown from './components/Dropdown.vue'
import API from './utils/pokeAPI'
import pokemonList from './utils/pokemonList.json'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Dropdown
  },
  data() {
    return {
      pokemonList: pokemonList,
      pokemonData: {}
    }
  },
  methods: {
    switchPokemon: async function(pokemon) {
      const individualPokemonData = await API.getPokemon(pokemon)
      console.log(individualPokemonData);
      this.pokemonData[pokemon] = individualPokemonData.data;
      console.log(this.pokemonData);
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

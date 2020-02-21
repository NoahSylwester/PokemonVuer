<template>
  <div id="app">
    <div>
      <!-- <img class="pokemon-logo" alt="pokemon logo image" src='https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png'> -->
      <span class="vue-er">Pokémon Vue-er</span>
      <Dropdown :pokemonList="pokemonList" @switch-pokemon="switchPokemon"/>
    </div>
    <div>
      <h2>{{ currentPokemon.name }}</h2>
      <img class="pokemon-image" alt="pokemon image" :src="currentPokemon.image">
      <Details :pokemon="currentPokemon"/>
    </div>
  </div>
</template>

<script>
import Dropdown from './components/Dropdown.vue'
import Details from './components/Details.vue'
import API from './utils/pokeAPI'
import pokemonList from './utils/pokemonList.json'
import bulbasaur from './utils/bulbasaur.json'

export default {
  name: 'App',
  components: {
    Dropdown,
    Details
  },
  data() {
    return {
      pokemonList: pokemonList,
      pokemonData: {},
      currentPokemon: bulbasaur
    }
  },
  methods: {
    switchPokemon: async function(pokemon) {
      if (this.pokemonData[pokemon] === undefined) {
        const individualPokemonData = await API.getPokemon(pokemon)
        this.pokemonData[pokemon] = individualPokemonData.data;
        this.currentPokemon.image = this.pokemonData[pokemon].sprites.front_default;
        this.currentPokemon.name = this.pokemonData[pokemon].name;
        this.currentPokemon.height = this.pokemonData[pokemon].height;
        this.currentPokemon.weight = this.pokemonData[pokemon].weight;
        this.currentPokemon.abilities = this.pokemonData[pokemon].abilities;
        this.currentPokemon.moves = this.pokemonData[pokemon].moves;
        this.currentPokemon.stats = this.pokemonData[pokemon].stats;
        this.currentPokemon.types = this.pokemonData[pokemon].types;
      }
      else {
        this.currentPokemon.name = this.pokemonData[pokemon].name;
        this.currentPokemon = this.pokemonData[pokemon].sprites.front_default;
        this.currentPokemon.height = this.pokemonData[pokemon].height;
        this.currentPokemon.weight = this.pokemonData[pokemon].weight;
        this.currentPokemon.abilities = this.pokemonData[pokemon].abilities;
        this.currentPokemon.moves = this.pokemonData[pokemon].moves;
        this.currentPokemon.stats = this.pokemonData[pokemon].stats;
        this.currentPokemon.types = this.pokemonData[pokemon].types;
      }
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
.pokemon-logo {
  height: 100px;
}
.vue-er {
  font-size: 3rem;
}
.pokemon-image {
  height: 150px;
}
</style>

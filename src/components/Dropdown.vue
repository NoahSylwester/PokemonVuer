<template>
    <div>
        <select name="dropdown" v-model="pokemonList">
            <option v-for="pokemon in pokemonList" :value="pokemon" :key="pokemon">{{ pokemon }}</option>
        </select>
    </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    pokemonList: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
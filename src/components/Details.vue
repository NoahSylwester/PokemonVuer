<template>
  <div class="details">
    <span>Height: <b>{{ pokemon.height }}</b> - Weight: <b>{{ pokemon.weight }}</b></span>

    <div class="section">
      <h2>Types</h2>
      <ul>
        <li class="non-blocked" v-for="type in pokemon.types" :key="type.type.name">{{ type.type.name }}</li>
      </ul>
    </div>
    
    <div class="section">
      <h2>Abilities</h2>
      <ul>
        <li class="non-blocked" v-for="ability in pokemon.abilities" :key="ability.ability.name">{{ ability.ability.name }}</li>
      </ul>
    </div>

    <div class="section">
      <h2>Stats</h2>
      <ul>
        <li class="blocked" v-for="stat in pokemon.stats" :key="stat.stat.name">{{ stat.stat.name }}: {{ stat.base_stat }}</li>
      </ul>
    </div>

    <div class="section">
      <h2>Moves</h2>
      <ul>
        <li class="blocked move" v-for="move in pokemon.moves" @click="showMove(move.move.name)" :key="move.move.name">
          <p><i>{{ move.move.name }}</i></p>
          <p v-show="clickedMove === move.move.name">(learned at lvl {{ move.version_group_details[0].level_learned_at !== 0 ? move.version_group_details[0].level_learned_at : 'any' }} via {{ move.version_group_details[0].move_learn_method.name }})</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    pokemon: Object
  },
  data() {
    return {
      clickedMove: ''
    }
  },
  methods: {
    showMove(name) {
      if (this.clickedMove !== name) {
        this.clickedMove = name;
      }
      else {
        this.clickedMove = '';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* div.side-by-side {
  display: flex;
  justify-content: space-around;
} */
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
li.non-blocked {
  display: inline-block;
  margin: 10px 10px;
}
li.blocked {
  display: block;
  margin: 10px 10px;
}
.move {
  cursor: pointer;
}
.section {
  border: 1px rgb(105, 105, 105) solid;
  border-radius: 7px;
  width: 50%;
  margin: 20px;
  padding-bottom: 20px;
}
a {
  color: #42b983;
}
</style>

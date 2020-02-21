import Vue from 'vue'
import App from './App.vue'
// import API from './utils/pokeAPI';
// import pokemonArr from './utils/pokemonList.json';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
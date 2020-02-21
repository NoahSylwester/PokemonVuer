import axios from 'axios';

export default {
    getPokemon: async function(pokemon) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    }
}

// const awaited = async function(){
//     const returned = await API.getPokemon(pokemonArr[3]);
//     console.log(returned);
//   }
//   awaited();
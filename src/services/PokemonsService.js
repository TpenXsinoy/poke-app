import axios from "axios";

const PokemonsService = {
  list: (offset) =>
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`),
  retrieveByName: (name) =>
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`),
};

export default PokemonsService;

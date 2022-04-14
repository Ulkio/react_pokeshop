import axios from "axios";

export const getAllPokemons = async () => {
  const results = await axios.get(
    "https://pokeapi.co/api/v2/pokemon-species/?limit=151"
  );
  return results.data;
};

export const getPokemonByName = async (name) => {
  const results = await axios.get(
    "https://pokeapi.co/api/v2/pokemon-species/" + name
  );
  return results.data;
};

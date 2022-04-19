import axios from "axios";

export const getAllPokemons = async () => {
  const results = await axios.get(
    "https://pokeapi.co/api/v2/pokemon-species/?limit=151"
  );
  return results.data;
};

export const getPokemonByName = async (name) => {
  const results = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name);

  results.data.types.forEach(async (type) => {
    type.type.name = await getFrenchType(type.type.name);
  });
  results.data.name = await getFrenchName(name);

  return results.data;
};

export const getFrenchName = async (name) => {
  const results = await axios.get(
    "https://pokeapi.co/api/v2/pokemon-species/" + name
  );
  return results.data.names[4].name;
};

export const getFrenchType = async (name) => {
  const results = await axios.get("https://pokeapi.co/api/v2/type/" + name);
  return results.data.names[3].name;
};

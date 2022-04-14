import React, { useState, useEffect } from "react";
import styles from "../../modules/Shop.module.css";
import { getAllPokemons, getPokemonByName } from "../../api/pokeapi";

function Shop() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axiosGetAllPokemons();
  }, []);

  // PROBLEME DE MULTIPLE FETCH
  const axiosGetAllPokemons = async () => {
    await getAllPokemons().then((res) => {
      res.results.map(async (item) => {
        await getPokemonByName(item.name).then((res2) => {
          setPokemons((pokemons) => [...pokemons, res2]);
        });
      });
    });
  };

  const display = () => {
    return pokemons.map((pokemon) => {
      return (
        <React.Fragment key={pokemon.name}>
          <h2>{pokemon.names[4].name}</h2>
        </React.Fragment>
      );
    });
  };

  return <>{display()}</>;
}

export default Shop;

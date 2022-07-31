import React, { useState, useEffect } from "react";
import styles from "../../modules/Shop.module.css";
import { getAllPokemons, getPokemonByName } from "../../api/pokeapi";
import Card from "../Card/Card";

function Shop() {
  const [pokemons, setPokemons] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    axiosGetAllPokemons();
  }, []);

  const axiosGetAllPokemons = async () => {
    const pokemonArray = await getAllPokemons();

    pokemonArray.results.map(async (poke) => {
      await getPokemonByName(poke.name).then((res) => {
        setPokemons((prevState) => [...prevState, res]);
        setDataLoading(false);
      });
    });
  };

  const display = () => {
    return pokemons.map((pokemon) => {
      return (
        <article key={pokemon.id}>
          <Card pokemon={pokemon} />
        </article>
      );
    });
  };

  return <>{dataLoading ? <h1>Chargement des données</h1> : <div className={styles.cardList}>{display()}</div>}</>;
}

export default Shop;

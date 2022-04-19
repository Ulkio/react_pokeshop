import React from "react";
import styles from "../../modules/Card.module.css";

function Card({ pokemon }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src={pokemon.sprites.other["official-artwork"].front_default} />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.pokemonName}>
            <h1>{pokemon.name}</h1>
          </div>

          {pokemon.types.map((res) => {
            return <h4 key={res.type.name}>{res.type.name}</h4>;
          })}
        </div>
      </div>
    </>
  );
}

export default Card;

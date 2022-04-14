import React from "react";
import styles from "../../modules/Hero.module.css";

function Hero() {
  return (
    <section>
      <div className={styles.heroBg}>
        <div className={styles.heroTxt}>
          <h1>Achetez vos Pokémon dans notre super Pokéshop !</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;

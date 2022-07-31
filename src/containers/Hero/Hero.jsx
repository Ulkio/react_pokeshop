import React from "react";
import styles from "../../modules/Hero.module.css";

function Hero() {
  return (
    <section>
      <div className={styles.heroBg}>
        <div className={styles.heroTxt}>
          <h1>Un super pokédex !</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React, { useState } from "react";
import Barra from "./Barra/Barra";
import styles from "./Home.module.css";
import Obras from "./Obras/Obras";
import Head from "./Helper/Head";
import { motion } from "framer-motion";

const Home = () => {
  const [type, setType] = useState("Season");
  function onClick({ target }) {
    setType(target.innerText);
  }

  return (
    <main>
      <Barra />
      <div className={styles.conteudo}>
        <aside className={`${styles.caixa} ${styles.btns}`}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`${styles.btn} ${
              type === "Season" ? `${styles.ativo}` : ""
            }`}
            onClick={onClick}
          >
            Season
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`${styles.btn} ${
              type === "Anime" ? `${styles.ativo}` : ""
            }`}
            onClick={onClick}
          >
            Anime
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`${styles.btn} ${
              type === "Manga" ? `${styles.ativo}` : ""
            }`}
            onClick={onClick}
          >
            Manga
          </motion.button>
        </aside>
        <div className={styles.caixa}>
          <Obras type={type} />
        </div>
      </div>
      <Head title="Home" />
    </main>
  );
};

export default Home;

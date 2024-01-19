import React, { useState } from "react";
import Barra from "./Barra/Barra";
import styles from "./Home.module.css";
import Obras from "./Obras/Obras";

const Home = () => {

  const [type, setType] = useState("Season");
  function onClick({ target }) {
    console.log(target)
    setType(target.innerText);
  }

  return (
    <main>
      <Barra />
      <div className={styles.conteudo}>
        <aside className={`${styles.caixa} ${styles.btns}`} >
          <button className={`${styles.btn} ${type === 'Season' ? `${styles.ativo}` : ''}`} onClick={onClick}>Season</button>
          <button className={`${styles.btn} ${type === 'Anime' ? `${styles.ativo}` : ''}`} onClick={onClick}>Anime</button>
          <button className={`${styles.btn} ${type === 'Manga' ? `${styles.ativo}` : ''}`} onClick={onClick}>Manga</button>
        </aside>
        <div className={styles.caixa}>
          <Obras type={type}/>
        </div>
        <div className={styles.caixa}></div>
      </div>
      {/* <Estrutura data={data["data"]} /> */}
    </main>
  );
};

export default Home;

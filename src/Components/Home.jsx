import React, { useState } from "react";
import Barra from "./Barra/Barra";
import { SEASSON_GET, TOP_ANIME_GET, TOP_MANGA_GET } from "../api";
import useFetch from "../Hooks/useFetch";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Home.module.css";
import Obras from "./Obras/Obras";

const Home = () => {

  const [type, setType] = useState("Seasson");

  function onClick({ target }) {
    setType(target.innerText);
  }

  return (
    <main>
      <Barra />
      <div className={styles.conteudo}>
        <div className={styles.caixa}>
          <button onClick={onClick}>Seasson</button>
          <button onClick={onClick}>Anime</button>
          <button onClick={onClick}>Manga</button>
        </div>
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

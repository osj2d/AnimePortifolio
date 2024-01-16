import React from "react";
import styles from "./Estrutura.module.css";
import Sidebar from "./Sidebar/Sidebar";

const estrutura = ({data}) => {
  console.log('a', data)
  if(data == true) return <h1>nada</h1>
  return (
    <div className={styles.conteudo}>
      <div className={styles.caixa}>
        <Sidebar />
      </div>
      <div className={styles.caixa}>
        {data.map((anime) => (
          <h2 key={anime["mal_id"]}>{anime["title"]}</h2>
        ))}
      </div>
      <div className={styles.caixa}></div>
    </div>
  );
};

export default estrutura;

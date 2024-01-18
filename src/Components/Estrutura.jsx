import React from "react";
import styles from "./Estrutura.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Helper/Card";
const estrutura = ({data}) => {
  if(data == true) return <h1>nada</h1>
  return (
    <div className={styles.conteudo}>
      <div className={styles.caixa}>
        <Sidebar />
      </div>
      <div className={styles.caixa}>
        {data.map((obra) => (
          <Card key={obra["mal_id"]} obra={obra} />          
        ))}
      </div>
      <div className={styles.caixa}></div>
    </div>
  );
};

export default estrutura;

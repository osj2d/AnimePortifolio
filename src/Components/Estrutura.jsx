import React from "react";
import styles from "./Estrutura.module.css";
import Sidebar from "./Sidebar/Sidebar";

const estrutura = () => {
  return (
    <div className={styles.conteudo}>
      <div className={styles.caixa}>
        <Sidebar />
      </div>
      <div className={styles.caixa}></div>
      <div className={styles.caixa}></div>
    </div>
  );
};

export default estrutura;

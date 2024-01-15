import React from "react";
import styles from "./Barra.module.css";
import Lupa from '../../assets/lupa.svg?react'

const Barra = () => {
  return (
    <form className={`${styles.barra} container mainContainer`}>
      <input
        placeholder="Oque você esta procurando?"
        className={styles.input}
        type="text"
      />
      <button className={styles.btn}><Lupa /></button>
    </form>
  );
};

export default Barra;

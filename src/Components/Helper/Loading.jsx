import React from "react";
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className="container">
      <p className={styles.carregando}>Carregando</p>
    </div>
  );
};

export default Loading;

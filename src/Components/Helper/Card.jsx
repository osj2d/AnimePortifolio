import React from "react";
import styles from "./Card.module.css";

const Card = ({ obra }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={obra["images"]["jpg"]["image_url"]}
        alt={obra["title"]}
      />
      <h2 className={styles.titulo}>{obra["title"]}</h2>
    </div>
  );
};

export default Card;

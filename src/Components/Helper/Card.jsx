import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ obra, tipo }) => {
  return (
    <div className={styles.card}>
      <Link className={styles.link} to={`/${tipo}/${obra["mal_id"]}`}>
        <img
          className={styles.img}
          src={obra["images"]["jpg"]["image_url"]}
          alt={obra["title"]}
        />
      </Link>
      <h2 className={styles.titulo}>{obra["title"]}</h2>
    </div>
  );
};

export default Card;

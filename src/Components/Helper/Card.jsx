import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ obra, tipo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={styles.card}
    >
      <Link className={styles.link} to={`/${tipo}/${obra["mal_id"]}`}>
        <img
          className={styles.img}
          src={obra["images"]["jpg"]["image_url"]}
          alt={obra["title"]}
        />
      </Link>
      <h2 className={styles.titulo}>{obra["title"]}</h2>
    </motion.div>
  );
};

export default Card;

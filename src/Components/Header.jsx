import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Link to="/" >
        <h1 className={styles.titulo}>Anime DB</h1>
      </Link>
    </header>
  );
};

export default Header;

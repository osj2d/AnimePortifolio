import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink, useLocation } from "react-router-dom";

const Tipos = () => {
  const { pathname } = useLocation();
  return (
    <aside className={styles.aside}>
      <NavLink to='/' >Season</NavLink>
      <NavLink to='/anime' >Anime</NavLink>
      <NavLink to='/mangas'>Mangas</NavLink>
      <NavLink to='/characters'>Characters</NavLink>
    </aside>
  );
};

export default Tipos;

import React, { useState } from "react";
import styles from "./Barra.module.css";
import Lupa from "../../assets/lupa.svg?react";
import { Navigate, useNavigate } from "react-router-dom";

const Barra = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    navigate("/search", {
      state:{
        search
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.barra} container mainContainer`}>
      <input
        placeholder="Oque você esta procurando?"
        className={styles.input}
        type="text"
        onChange={({ target }) => setSearch(target.value)}
      />
      <button className={styles.btn}>
        <Lupa />
      </button>
    </form>
  );
};

export default Barra;

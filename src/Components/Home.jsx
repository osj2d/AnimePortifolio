import React from "react";
import Barra from "./Barra/Barra";
import Estrutura from "./Estrutura/";
import styles from "./Home.module.css";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
  return (
    <main>
      <Barra />
      <Estrutura />
    </main>
  );
};

export default Home;

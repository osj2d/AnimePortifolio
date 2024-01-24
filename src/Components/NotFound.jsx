import React from "react";
import styles from "./NotFound.module.css";
import SadAnime from "../../public/notFound.gif";
import Head from "./Helper/Head";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <div className={`${styles.container} container `}>
      <h1 className={styles.title}>404 - PAGE NOT FOUND!!!</h1>
      <div>
        <img src={SadAnime} alt="Sad anime girl" />
      </div>
      <Head title="Not Found" />
      <Footer />
    </div>
  );
};

export default NotFound;

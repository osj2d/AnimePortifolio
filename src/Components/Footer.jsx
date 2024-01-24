import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "../assets/linkedin.svg?react";
import Site from "../assets/monkey.svg?react";
import Github from "../assets/Github.svg?react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Desenvolvido por Osmar Savi Jr</p>
      <Link
        to="https://osmarsavijrdev.com/"
        target="_blank"
      > 
      
        <Site />
      </Link>
      <Link
        to="https://github.com/osj2d"
        target="_blank"
      >
        <Github />
      </Link>
      <Link
        to="https://www.linkedin.com/in/osmar-savi-junior-3a4586177/"
        target="_blank"
      >
        <Linkedin />
      </Link>
    </footer>
  );
};

export default Footer;

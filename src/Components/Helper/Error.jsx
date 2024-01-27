import React from "react";
import styles from "./Error.module.css";

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <div className="container">
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Error;

import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.wrapper__header}>
        <h3>Contact App</h3>
        <p>
          <span>RezaShirali </span>| ReactJs - Contact App
        </p>
      </div>
    </>
  );
}

export default Header;

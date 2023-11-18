import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1>React Posts</h1>
      <button>New Posts</button>
    </div>
  );
}

export default Header;

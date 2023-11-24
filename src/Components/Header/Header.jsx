import React from "react";
import styles from "./Header.module.css";

function Header({ createPost }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>React Posts</h1>
      <button onClick={createPost}>New Posts</button>
    </div>
  );
}

export default Header;

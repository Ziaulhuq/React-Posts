import React from "react";
import styles from "./Posts.module.css";

function Posts({ textarea, name }) {
  return (
    <div className={styles.posts}>
      <div className={styles.textareatext}>{textarea}</div>
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default Posts;

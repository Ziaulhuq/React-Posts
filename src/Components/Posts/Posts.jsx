import React from "react";
import styles from "./Posts.module.css";

function Posts({ textarea, name }) {
  return (
    <div className={styles.posts}>
      <div>{textarea}</div>
      <p>{name}</p>
    </div>
  );
}

export default Posts;

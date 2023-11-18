import React from "react";
import Posts from "../Posts/Posts";
import styles from "./PostList.module.css";
import NewPosts from "../NewPosts/NewPosts";

function PostList() {
  return (
    <div>
      <NewPosts />
      <div className={styles.postlist}>
        <Posts />
        <Posts />
      </div>
    </div>
  );
}

export default PostList;

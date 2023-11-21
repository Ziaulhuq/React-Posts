import React, { useState } from "react";
import Posts from "../Posts/Posts";
import styles from "./PostList.module.css";
import NewPosts from "../NewPosts/NewPosts";
import Modal from "../Modal/Modal";

function PostList({ isModalVisible, hidemodalHanlder }) {
  const [posts, setPosts] = useState([]);

  function postsHandler(postData) {
    setPosts((prevposts) => [postData, ...prevposts]);
    console.log(postData, "postlists");
  }
  return (
    <div>
      {isModalVisible && (
        <Modal onClose={hidemodalHanlder}>
          <NewPosts onCancel={hidemodalHanlder} onAddPosts={postsHandler} />
        </Modal>
      )}

      <div className={styles.postlist}>
        <Posts />
        <Posts />
      </div>
    </div>
  );
}

export default PostList;

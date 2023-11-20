import React from "react";
import Posts from "../Posts/Posts";
import styles from "./PostList.module.css";
import NewPosts from "../NewPosts/NewPosts";
import Modal from "../Modal/Modal";

function PostList({ isModalVisible, hidemodalHanlder }) {
  return (
    <div>
      {isModalVisible && (
        <Modal onClose={hidemodalHanlder}>
          <NewPosts onCancel={hidemodalHanlder} />
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

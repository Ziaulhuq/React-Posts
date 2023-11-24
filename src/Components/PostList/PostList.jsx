import React, { useState } from "react";
import Posts from "../Posts/Posts";
import styles from "./PostList.module.css";
import NewPosts from "../NewPosts/NewPosts";
import Modal from "../Modal/Modal";

function PostList({ isModalVisible, hidemodalHanlder }) {
  const [posts, setPosts] = useState([]);

  function postsHandler(postData) {
    setPosts((prevposts) => [...prevposts, postData]);
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
        {posts.length > 0 && (
          <ul>
            {posts.map((post) => (
              <Posts
                key={post.name}
                textarea={post.textarea}
                name={post.name}
              />
            ))}
          </ul>
        )}
        {posts.length === 0 && (
          <p className={styles.paragraph}>
            <h2>No posts yet.</h2>
            <p className={styles.text}>
              click the new post button to create post.
            </p>
          </p>
        )}
      </div>
    </div>
  );
}

export default PostList;

import { useState } from "react";
import PostList from "./Components/PostList/PostList.jsx";
import Header from "./Components/Header/Header.jsx";

import styles from "./App.module.css";

function App() {
  const [modalEnabled, setModalEnabled] = useState(false);

  function showModalHandler() {
    setModalEnabled(true);
  }

  function hideModalHandler() {
    setModalEnabled(false);
  }
  return (
    <div className={styles.App}>
      <Header createPost={showModalHandler} />
      <hr />
      <PostList
        isModalVisible={modalEnabled}
        hidemodalHanlder={hideModalHandler}
      />
    </div>
  );
}

export default App;

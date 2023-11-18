import PostList from "./Components/PostList/PostList.jsx";
import Header from "./Components/Header/Header.jsx";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <PostList />
    </div>
  );
}

export default App;

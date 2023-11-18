import React from "react";
import styles from "./NewPosts.module.css";

function NewPosts() {
  return (
    <div>
      <form>
        <label>Textarea :</label>
        <input type="text" />
        <label>Name :</label>
        <input type="text" />
        <button>Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPosts;

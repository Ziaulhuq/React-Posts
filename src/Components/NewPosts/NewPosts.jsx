import React from "react";
import styles from "./NewPosts.module.css";

function NewPosts() {
  return (
    <div>
      <form>
        <p>
          <label>Textarea :</label>
          <input type="text" row={3} />
        </p>
        <p>
          <label>Name :</label>
          <input type="text" />
        </p>

        <button>Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPosts;

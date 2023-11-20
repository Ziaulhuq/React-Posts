import React, { useState } from "react";
import styles from "./NewPosts.module.css";

function NewPosts({ onCancel }) {
  const [enterTextArea, setEnterTextArea] = useState("");
  const [enterName, setEnterName] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const postData = {
      textarea: enterTextArea,
      name: enterName,
    };
    console.log(postData);

    setEnterName("");
    setEnterTextArea("");
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>
          <label>Textarea :</label>
          <textarea
            type="textarea"
            rows={3}
            required
            value={enterTextArea}
            onChange={(e) => setEnterTextArea(e.target.value)}
          />
        </p>
        <p>
          <label>Name :</label>
          <input
            type="text"
            value={enterName}
            onChange={(e) => setEnterName(e.target.value)}
            required
          />
        </p>
        <div className={styles.button}>
          <button className={styles.cancel} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPosts;

import styles from "./Modal.module.css";

function Modal({ children }) {
  return (
    <div>
      <div className={styles.backdrop} />
      <dialog>{children}</dialog>
    </div>
  );
}

export default Modal;

import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ close, children }) => {
  const closeModal = (event) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      close();
    }
  };

  useEffect(() => {
    const handleEscape = function ({ code }) {
      if (code === "Escape") {
        console.log("Escape");
        close();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [close]);

  return createPortal(
    <div onClick={closeModal} className={styles.overlay}>
      <div className={styles.content}>
        <span onClick={close} className={styles.close}>
          X
        </span>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

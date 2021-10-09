import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modal = document.querySelector("#modal-root");

export default function Modal({ onClose, clearModal, children }) {
  useEffect(() => {
    window.addEventListener("keydown", onEscClick);
    return () => {
      window.removeEventListener("keydown", onEscClick);
    };
  });

  const onEscClick = (e) => {
    if (e.code === "Escape") {
      onClose();
    //   clearModal();
    }
  };

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    //   clearModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={onBackdropClick}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modal
  );
}
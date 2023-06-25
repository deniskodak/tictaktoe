import React from "react";
import Modal from "react-modal";
import style from "./index.module.scss";

Modal.setAppElement("#app");

export default function ModalContainer({ isShown, onClose, children }) {
  return (
    <Modal
      overlayClassName={style.overlay}
      className={style.modal}
      isOpen={isShown}
      onRequestClose={onClose}
    >
      {children}
    </Modal>
  );
}

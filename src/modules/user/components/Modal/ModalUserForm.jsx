import { ModalContent, ModalBackdrop, BtnClose } from "./ModalUserForm.styled";

import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const ModalUserForm = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <BtnClose onClick={onClose} />
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

export default ModalUserForm;

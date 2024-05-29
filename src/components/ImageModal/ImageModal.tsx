import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageModalProps } from "./ImageModal.types";

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description || image.description || ""}
          className={css.modalImage}
        />
      )}
    </Modal>
  );
};

export default ImageModal;

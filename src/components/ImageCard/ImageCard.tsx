import React from "react";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={css.card} onClick={() => onImageClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description || image.description || ""}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;

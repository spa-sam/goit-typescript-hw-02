import { Image } from "../../types/Image";

export interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

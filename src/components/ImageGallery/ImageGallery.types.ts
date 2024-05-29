import { Image } from "../../types/Image";

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

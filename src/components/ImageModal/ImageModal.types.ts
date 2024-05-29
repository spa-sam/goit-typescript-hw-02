import { Image } from "../../types/Image";

export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

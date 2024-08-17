export interface CropImageProps {
  imageSrc: string;
  cropShape: 'rect' | 'round';
  aspectRatio: number;
  cropSize?: { width: number; height: number };
  nextPagePath: string;
  onCropComplete?: (croppedImage: string) => void;
}

//src/types/cropImage.ts
import { Area } from 'react-easy-crop/types';


export interface CropImageProps {
  imageSrc: string;
  cropShape: 'rect' | 'round';
  aspectRatio: number;
  cropSize: { width: number; height: number };
  onCropComplete?: (croppedImage: string) => void;
}

import { Area } from 'react-easy-crop/types';

export interface CropImageProps {
  imageSrc: string;
  cropShape: 'rect' | 'round';
  aspectRatio: number;
  cropSize: { width: number; height: number };
  onCropComplete?: (croppedAreaPixels: Area | null) => void; // 이 부분은 필요에 따라 옵션으로 만들 수 있습니다.
}
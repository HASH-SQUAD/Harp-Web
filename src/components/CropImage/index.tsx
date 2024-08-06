import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop/types';
import { getCroppedImg } from '../../lib/utils/cropImage';

interface CropImageProps {
  imageSrc: string;
  onComplete: (croppedImage: string) => void;
  cropShape: 'rect' | 'round';
  aspectRatio: number;
  cropSize: { width: number, height: number };
}

const CropImage: React.FC<CropImageProps> = ({ imageSrc, onComplete, cropShape, aspectRatio, cropSize }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={aspectRatio}
        cropShape={cropShape}
        cropSize={cropSize}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    </div>
  );
};

export default CropImage;

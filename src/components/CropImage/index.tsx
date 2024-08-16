import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop/types';
import { getCroppedImg } from '../../lib/utils/cropImage';
import NextButton from 'components/NextButton';
import { useNavigate } from 'react-router-dom';
import { CropImageProps } from '../../types/cropImage';

export const CropImage = ({ imageSrc, cropShape, aspectRatio, cropSize, onCropComplete }: CropImageProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropCompleteHandler = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleComplete = async () => {
    if (croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        if (onCropComplete) {
          onCropComplete(croppedImage);
        }
      } catch (error) {
        console.error('이미지 자르기 오류:', error);
      }
    }
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
        onCropComplete={onCropCompleteHandler}
      />
      <NextButton text="완료" state={!!croppedAreaPixels} onClick={handleComplete} />
    </div>
  );
};

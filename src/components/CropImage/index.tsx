// 라이브러리
import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

// 파일
import { Area } from 'react-easy-crop/types';
import { getCroppedImg } from '../../lib/utils/getCroppedImg';
import NextButton from 'components/NextButton';
import { CropImageProps } from '../../types/cropImage';
import * as _ from './style';

const CropImage = ({ imageSrc, cropShape, aspectRatio, onCropComplete }: CropImageProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropCompleteHandler = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleComplete = useCallback(async () => {
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
  }, [croppedAreaPixels, imageSrc, onCropComplete]);

  return (
    <_.CropImage_Layout>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={aspectRatio}
        cropShape={cropShape}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropCompleteHandler}
      />
      <NextButton text="완료" state={!!croppedAreaPixels} onClick={handleComplete} />
    </_.CropImage_Layout>
  );
};

export default CropImage;

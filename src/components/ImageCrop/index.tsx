import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

function ImageCrop({ imageSrc, cropShape, onCropComplete }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    // Crop 완료 후 처리 로직
    onCropComplete(croppedAreaPixels);
  }, [onCropComplete]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={1} // 1:1 비율
        cropShape={cropShape}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={handleCropComplete}
      />
    </div>
  );
}

export default ImageCrop;

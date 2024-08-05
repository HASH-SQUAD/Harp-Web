import React from 'react';
import * as _ from './style';
import Header from 'components/Header';
import NextButton from 'components/NextButton';
import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'

const Crop = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
      console.log(croppedArea, croppedAreaPixels)
    }
  return (
    <>
      <Header title="자르기"/>
    <_.Crop_Container>
    <div style={{ position: 'relative', width: '100%', height: 400 }}>
    <Cropper
      image={yourImage}
      crop={crop}
      zoom={zoom}
      aspect={4 / 3}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
    />
        </div>
    </_.Crop_Container>
    </>
  );
};

export default Crop;
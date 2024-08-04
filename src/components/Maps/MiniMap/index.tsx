import React, { useEffect } from 'react';
import * as _ from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

const MiniMap = () => {
  useEffect(() => {
    const loadKakaoMap = () => {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.REACT_APP_KAKAO_KEY}`;
      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById('map');
          const options = {
            center: new window.kakao.maps.LatLng(
              37.29432708770308,
              126.99658273529194
            ),
            level: 3
          };
          const map = new window.kakao.maps.Map(container, options);
        });
      };
      document.head.appendChild(script);
    };

    loadKakaoMap();
  }, []);

  return <_.MiniMap_Layout id="map" />;
};

export default MiniMap;

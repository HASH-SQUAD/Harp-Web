// 라이브러리
import React, { useCallback, useEffect } from 'react';

// 파일
import * as _ from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MiniMapProps {
  keyword: string;
}

interface Place {
  x: string;
  y: string;
}

const MiniMap = ({ keyword }: MiniMapProps) => {
  const searchPlace = useCallback(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(0, 0),
      level: 3
    };
    const map = new window.kakao.maps.Map(container, options);

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data: Place[], status: string) => {
      if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
        const place = data[0];
        const location = new window.kakao.maps.LatLng(place.y, place.x);
        map.setCenter(location);
      }
    });
  }, [keyword]);

  useEffect(() => {
    if (window.kakao) {
      searchPlace();
    } else {
      console.log('카카오맵 스크립트 에러');
    }
  }, []);

  return <_.MiniMap_Layout id="map" />;
};

export default MiniMap;

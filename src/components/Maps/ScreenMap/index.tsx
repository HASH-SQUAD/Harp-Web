// 라이브러리
import React, { useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';

// 파일
import * as _ from './style';
import { theme } from 'lib/utils/style/theme';
import Marker from 'assets/image/Marker.svg';

declare global {
  interface Window {
    kakao: any;
  }
}

const ScreenMap = () => {
  const currentOverlay = useRef<null | any>(null);
  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      console.error('카카오 지도 API를 로드할 수 없습니다.');
      return;
    }

    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    const positions = [
      {
        title: '카카오',
        latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
      },
      {
        title: '생태연못',
        latlng: new window.kakao.maps.LatLng(33.450936, 126.569477)
      },
      {
        title: '텃밭',
        latlng: new window.kakao.maps.LatLng(33.450879, 126.56994)
      },
      {
        title: '근린공원',
        latlng: new window.kakao.maps.LatLng(33.451393, 126.570738)
      }
    ];

    const linePath = positions.map((position) => position.latlng);

    const polyline = new window.kakao.maps.Polyline({
      path: linePath,
      strokeWeight: 2,
      strokeColor: theme.primary[6],
      strokeOpacity: 1,
      strokeStyle: 'solid'
    });
    polyline.setMap(map);

    positions.forEach((position, index) => {
      const imageSize = new window.kakao.maps.Size(30, 37);
      const markerImage = new window.kakao.maps.MarkerImage(Marker, imageSize);
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: position.latlng,
        title: position.title,
        image: markerImage
      });

      const sequenceOverlayContent = ReactDOMServer.renderToString(
        <_.ScreenMap_Overlay>{`${index + 1}번째`}</_.ScreenMap_Overlay>
      );

      const sequenceOverlay = new window.kakao.maps.CustomOverlay({
        map: map,
        position: position.latlng,
        content: sequenceOverlayContent,
        yAnchor: 3
      });

      sequenceOverlay.setMap(map);

      const infoOverlayContent = ReactDOMServer.renderToString(
        <_.ScreenMap_InfoWindow>
          <_.ScreenMap_Header>
            <_.ScreenMap_Title>만나기</_.ScreenMap_Title>
            <_.ScreenMap_Time>· 오전 11시</_.ScreenMap_Time>
          </_.ScreenMap_Header>
          <_.ScreenMap_Location>맥도날드 김해삼정DT점</_.ScreenMap_Location>
        </_.ScreenMap_InfoWindow>
      );

      const infoOverlay = new window.kakao.maps.CustomOverlay({
        map: map,
        position: position.latlng,
        content: infoOverlayContent,
        yAnchor: -0.2
      });

      infoOverlay.setMap(null);

      window.kakao.maps.event.addListener(marker, 'click', () => {
        if (currentOverlay.current) {
          currentOverlay.current.setMap(null);
        }
        infoOverlay.setMap(map);
        currentOverlay.current = infoOverlay;
      });

      window.kakao.maps.event.addListener(map, 'click', () => {
        if (currentOverlay.current) {
          currentOverlay.current.setMap(null);
          currentOverlay.current = null;
        }
      });
    });
  }, []);

  return <_.ScreenMap_Layout id="map" />;
};

export default ScreenMap;

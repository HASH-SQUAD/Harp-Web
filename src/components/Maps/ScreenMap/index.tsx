// 라이브러리
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

// 파일
import * as _ from './style';
import { theme } from 'lib/utils/style/theme';
import Marker from 'assets/image/Marker.svg';
import { useQuery } from 'react-query';
import { PlanResult } from 'types/plan';
import { useParams } from 'react-router-dom';
import { Plan_Result } from 'lib/apis/Plan';

declare global {
  interface Window {
    kakao: any;
  }
}

const ScreenMap = () => {
  const id = useParams().id;

  const [planInfos, setPlanInfos] = useState<PlanResult | null>(null);

  useQuery(['planResult', id], () => Plan_Result({ id }), {
    onSuccess: (response) => {
      if (response?.data?.PlanData) {
        setPlanInfos(response.data.PlanData);
      }
    },
    onError: (error) => {
      console.error('일정 정보 불러오기 실패: ', error);
    }
  });

  const currentOverlay = useRef<any>(null);

  const getPositions = useCallback(async (locations: any) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    const promises = locations.map((location: string) => {
      return new Promise((resolve, reject) => {
        geocoder.addressSearch(location, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            resolve({
              latlng: new window.kakao.maps.LatLng(result[0].y, result[0].x),
              title: location
            });
          } else {
            reject(new Error('좌표를 찾을 수 없습니다.'));
          }
        });
      });
    });
    return Promise.all(promises);
  }, []);

  const calculateCenter = (positions: any[]) => {
    const totalLat = positions.reduce(
      (sum, pos) => sum + pos.latlng.getLat(),
      0
    );
    const totalLng = positions.reduce(
      (sum, pos) => sum + pos.latlng.getLng(),
      0
    );
    const centerLat = totalLat / positions.length;
    const centerLng = totalLng / positions.length;
    return new window.kakao.maps.LatLng(centerLat, centerLng);
  };

  const createMap = useCallback((center: any) => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center,
      level: 3
    };
    return new window.kakao.maps.Map(mapContainer, mapOption);
  }, []);

  const createMarkers = useCallback(
    async (map: any, planData: any) => {
      const locations = [
        [
          {
            time: '10:00',
            activity: '해운대 도착 후 체크인',
            location: '부산광역시 동구 중앙대로533번길 4',
            recommendation: '해운대 펜션에서 편안한 휴식'
          },
          {
            time: '11:00',
            activity: '해운대 해변 산책',
            location: '부산광역시 부산진구 성지로 50',
            recommendation: '바다의 경치를 즐기며 산책하기'
          },
          {
            time: '12:00',
            activity: '점심 식사',
            location: '부산광역시 부산진구 서면로68번길 11',
            recommendation: '해운대 맛집에서 해물 파전'
          },
          {
            time: '14:00',
            activity: '해운대 아쿠아리움 관람',
            location: '부산광역시 부산진구 서면로68번길 33',
            recommendation: '다양한 해양 생물 관람하기'
          }
        ].map((item: any) => item.location)
      ];

      if (locations.length === 0) {
        console.error('위치 정보가 없습니다.');
        return;
      }

      const positions = await getPositions(locations[0]);
      const center = calculateCenter(positions);

      const newMap = createMap(center);

      const linePath = positions.map((position) => position.latlng);

      const polyline = new window.kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 2,
        strokeColor: theme.primary[6],
        strokeOpacity: 1,
        strokeStyle: 'solid'
      });
      polyline.setMap(newMap);

      positions.forEach((position, index) => {
        const imageSize = new window.kakao.maps.Size(30, 37);
        const markerImage = new window.kakao.maps.MarkerImage(
          Marker,
          imageSize
        );
        const marker = new window.kakao.maps.Marker({
          map: newMap,
          position: position.latlng,
          title: position.title,
          image: markerImage
        });

        const sequenceOverlayContent = ReactDOMServer.renderToString(
          <_.ScreenMap_Overlay>{`${index + 1}번째`}</_.ScreenMap_Overlay>
        );

        const sequenceOverlay = new window.kakao.maps.CustomOverlay({
          map: newMap,
          position: position.latlng,
          content: sequenceOverlayContent,
          yAnchor: 3
        });

        sequenceOverlay.setMap(newMap);

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
          map: newMap,
          position: position.latlng,
          content: infoOverlayContent,
          yAnchor: -0.2
        });

        infoOverlay.setMap(null);

        window.kakao.maps.event.addListener(marker, 'click', () => {
          if (currentOverlay.current) {
            currentOverlay.current.setMap(null);
          }
          infoOverlay.setMap(newMap);
          currentOverlay.current = infoOverlay;
        });

        window.kakao.maps.event.addListener(newMap, 'click', () => {
          if (currentOverlay.current) {
            currentOverlay.current.setMap(null);
            currentOverlay.current = null;
          }
        });
      });
    },
    [getPositions, createMap]
  );

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      console.error('카카오 지도 API를 로드할 수 없습니다.');
      return;
    }

    if (planInfos) {
      createMarkers(null, planInfos);
    }
  }, [createMarkers, planInfos]);

  return <_.ScreenMap_Layout id="map" />;
};

export default ScreenMap;

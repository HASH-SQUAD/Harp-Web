import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

import * as _ from './style';
import { theme } from 'lib/utils/style/theme';
import Marker from 'assets/image/Marker.svg';
import { PlanResult } from 'types/plan';
import { formatTime } from 'lib/utils/formatTime';

declare global {
  interface Window {
    kakao: any;
  }
}

interface OwnProps {
  planInfos: PlanResult | null;
}

const ScreenMap = ({ planInfos }: OwnProps) => {
  const currentOverlay = useRef<any>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>('day1');

  const createMap = useCallback((center: any) => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center,
      level: 3
    };
    return new window.kakao.maps.Map(mapContainer, mapOption);
  }, []);

  const createMarkers = useCallback(
    (planData: any, day: string) => {
      const locations = planData[day]?.map((item: any) => ({
        time: item.time,
        activity: item.activity,
        location: item.location,
        recommendation: item.recommendation,
        x: parseFloat(item.x),
        y: parseFloat(item.y)
      }));

      if (!locations || locations.length === 0) {
        console.error('위치 정보가 없습니다.');
        return;
      }

      const newMap = createMap(
        new window.kakao.maps.LatLng(
          locations[0 || 1 || 2 || 3 || 4].y,
          locations[0 || 1 || 2 || 3 || 4].x
        )
      );

      const linePath = locations.map(
        (loc: { x: number; y: number }) =>
          new window.kakao.maps.LatLng(loc.y, loc.x)
      );

      const polyline = new window.kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 2,
        strokeColor: theme.primary[6],
        strokeOpacity: 1,
        strokeStyle: 'solid'
      });
      polyline.setMap(newMap);

      locations.forEach((loc: any, index: number) => {
        const imageSize = new window.kakao.maps.Size(30, 37);
        const markerImage = new window.kakao.maps.MarkerImage(
          Marker,
          imageSize
        );
        const marker = new window.kakao.maps.Marker({
          map: newMap,
          position: new window.kakao.maps.LatLng(loc.y, loc.x),
          title: loc.activity,
          image: markerImage
        });

        const sequenceOverlayContent = ReactDOMServer.renderToString(
          <_.ScreenMap_Overlay>{`${index + 1}번째`}</_.ScreenMap_Overlay>
        );

        const sequenceOverlay = new window.kakao.maps.CustomOverlay({
          map: newMap,
          position: new window.kakao.maps.LatLng(loc.y, loc.x),
          content: sequenceOverlayContent,
          yAnchor: 3
        });

        sequenceOverlay.setMap(newMap);

        const infoOverlayContent = ReactDOMServer.renderToString(
          <_.ScreenMap_InfoWindow>
            <_.ScreenMap_Header>
              <_.ScreenMap_Title>{loc.activity}</_.ScreenMap_Title>
              <_.ScreenMap_Time>· {formatTime(loc.time)}</_.ScreenMap_Time>
            </_.ScreenMap_Header>
            <_.ScreenMap_Location>{loc.location}</_.ScreenMap_Location>
          </_.ScreenMap_InfoWindow>
        );

        const infoOverlay = new window.kakao.maps.CustomOverlay({
          map: newMap,
          position: new window.kakao.maps.LatLng(loc.y, loc.x),
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
    [createMap]
  );

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      console.error('카카오 지도 API를 로드할 수 없습니다.');
      return;
    }

    if (planInfos && selectedDay) {
      createMarkers(planInfos.data, selectedDay);
    }
  }, [createMarkers, planInfos, selectedDay]);

  return (
    <_.ScreenMap_Layout id="map">
      {planInfos ? (
        <_.ScreenMap_DaysSelectList>
          {Object.keys(planInfos.data)
            .filter((key) => key !== 'tips')
            .map((day) => (
              <_.ScreenMap_DaySelect
                key={day}
                isSelected={selectedDay === day}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </_.ScreenMap_DaySelect>
            ))}
        </_.ScreenMap_DaysSelectList>
      ) : (
        <div>데이터를 불러오는 중입니다...</div>
      )}
    </_.ScreenMap_Layout>
  );
};

export default ScreenMap;

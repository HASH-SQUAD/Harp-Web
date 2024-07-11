//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import Home from 'assets/Icon/MenuBar/Select/Home';
import Home_Not from 'assets/Icon/MenuBar/NotSelect/Home';
import Travel from 'assets/Icon/MenuBar/Select/Travel';
import Travel_Not from 'assets/Icon/MenuBar/NotSelect/Travel';
import Community from 'assets/Icon/MenuBar/Select/Community';
import Community_Not from 'assets/Icon/MenuBar/NotSelect/Travel';
import Wish from 'assets/Icon/MenuBar/Select/Wish';
import Wish_Not from 'assets/Icon/MenuBar/NotSelect/Wish';
import All from 'assets/Icon/MenuBar/Select/All';
import All_Not from 'assets/Icon/MenuBar/NotSelect/All';

interface MenuBarProps {
  selectState: number;
}

const MenuBar = ({ selectState }: MenuBarProps) => {
  return (
    <_.MenuBar_Container>
      {selectState === 1 ? (
        <_.Menubar_Icon>
          <Home />
          <_.Menubar_Title select>홈</_.Menubar_Title>
        </_.Menubar_Icon>
      ) : (
        <_.Menubar_Icon>
          <Home_Not />
          <_.Menubar_Title>홈</_.Menubar_Title>
        </_.Menubar_Icon>
      )}

      {selectState === 2 ? (
        <_.Menubar_Icon>
          <Travel />
          <_.Menubar_Title select>여행</_.Menubar_Title>
        </_.Menubar_Icon>
      ) : (
        <_.Menubar_Icon>
          <Travel_Not />
          <_.Menubar_Title>여행</_.Menubar_Title>
        </_.Menubar_Icon>
      )}

      {selectState === 3 ? (
        <_.Menubar_Icon>
          <Community />
          <_.Menubar_Title select>커뮤니티</_.Menubar_Title>
        </_.Menubar_Icon>
      ) : (
        <_.Menubar_Icon>
          <Community_Not />
          <_.Menubar_Title>커뮤니티</_.Menubar_Title>
        </_.Menubar_Icon>
      )}

      {selectState === 4 ? (
        <_.Menubar_Icon>
          <Wish />
          <_.Menubar_Title select>찜</_.Menubar_Title>
        </_.Menubar_Icon>
      ) : (
        <_.Menubar_Icon>
          <Wish_Not />
          <_.Menubar_Title>찜</_.Menubar_Title>
        </_.Menubar_Icon>
      )}

      {selectState === 5 ? (
        <_.Menubar_Icon>
          <All />
          <_.Menubar_Title select>전체</_.Menubar_Title>
        </_.Menubar_Icon>
      ) : (
        <_.Menubar_Icon>
          <All_Not />
          <_.Menubar_Title>전체</_.Menubar_Title>
        </_.Menubar_Icon>
      )}
    </_.MenuBar_Container>
  );
};

export default MenuBar;

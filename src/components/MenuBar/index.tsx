// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Home from 'assets/Icon/MenuBar/Select/Home';
import Home_Not from 'assets/Icon/MenuBar/NotSelect/Home';
import Travel from 'assets/Icon/MenuBar/Select/Travel';
import Travel_Not from 'assets/Icon/MenuBar/NotSelect/Travel';
import Community from 'assets/Icon/MenuBar/Select/Community';
import Community_Not from 'assets/Icon/MenuBar/NotSelect/Community';
import Wish from 'assets/Icon/MenuBar/Select/Wish';
import Wish_Not from 'assets/Icon/MenuBar/NotSelect/Wish';
import All from 'assets/Icon/MenuBar/Select/All';
import All_Not from 'assets/Icon/MenuBar/NotSelect/All';
import { useNavigate } from 'react-router-dom';

interface MenuBarProps {
  selectState: number;
}

const icons = [
  { selected: Home, notSelected: Home_Not, title: '홈', location: '/' },
  {
    selected: Travel,
    notSelected: Travel_Not,
    title: '여행',
    location: '/plan/selectdate'
  },
  {
    selected: Community,
    notSelected: Community_Not,
    title: '커뮤니티',
    location: '/community'
  },
  { selected: Wish, notSelected: Wish_Not, title: '찜', location: '/wish' },
  { selected: All, notSelected: All_Not, title: '전체', location: '/all' }
];

const MenuBar = ({ selectState }: MenuBarProps) => {
  const navigate = useNavigate();

  return (
    <_.MenuBar_Container>
      {icons.map((icon, index) => (
        <_.Menubar_Icon
          key={index}
          onClick={() => {
            navigate(icon.location, { state: { fromHome: true } });
          }}
        >
          {selectState === index + 1 ? <icon.selected /> : <icon.notSelected />}
          <_.Menubar_Title select={selectState === index + 1}>
            {icon.title}
          </_.Menubar_Title>
        </_.Menubar_Icon>
      ))}
    </_.MenuBar_Container>
  );
};

export default MenuBar;

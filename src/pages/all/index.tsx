// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import MenuBar from 'components/MenuBar';
import SettingIcon from 'assets/Icon/SettingIcon';
import DefaultImage from 'assets/image/DefaultProfile.png';
import RightArrow from 'assets/Icon/RightArrow';
import { theme } from 'lib/utils/style/theme';
import { AllPageMenu } from 'data/AllPageMenu';

const All = () => {
  return (
    <_.All_Layout>
      <_.All_Header>
        <_.All_Name>전체</_.All_Name>
        <SettingIcon />
      </_.All_Header>
      <_.All_Profile>
        <_.All_Profile_Image url={DefaultImage} />
        <_.All_Name>
          탐험가 고릴라
          <RightArrow width="20" height="20" color={theme.gray.black} />
        </_.All_Name>
      </_.All_Profile>
      <_.All_CategoryList>
        <_.All_CategoryList>
          {AllPageMenu.map((categoryItem, categoryIndex) => (
            <>
              <_.All_CategoryBox key={categoryIndex}>
                <_.All_Category>{categoryItem.category}</_.All_Category>
                <_.All_MenuList>
                  {categoryItem.menus.map((menuItem, menuIndex) => (
                    <_.All_Menu key={menuIndex}>
                      {menuItem.icon}
                      <span>{menuItem.title}</span>
                    </_.All_Menu>
                  ))}
                </_.All_MenuList>
              </_.All_CategoryBox>
              {(categoryIndex === 0 || categoryIndex === 1) && <_.All_Hr />}
            </>
          ))}
        </_.All_CategoryList>
      </_.All_CategoryList>
      <MenuBar selectState={4} />
    </_.All_Layout>
  );
};

export default All;

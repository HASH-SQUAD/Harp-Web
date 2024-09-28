//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import Location from 'assets/Icon/Location';

type OwnProps = {
  Title?: string;
  Address?: string;
  onClickIcon: () => void;
};

const AddPlanContent = ({ Title, Address, onClickIcon }: OwnProps) => {
  return (
    <_.AddPlanContent_Container>
      <_.AddPlanContent_Info>
        <_.AddPlanContent_Title>{Title}</_.AddPlanContent_Title>
        <_.AddPlanContent_Address>{Address}</_.AddPlanContent_Address>
      </_.AddPlanContent_Info>

      <_.AddPlanContent_Button>
        <_.AddPlanContent_Button_Loction onClick={onClickIcon}>
          <Location />
        </_.AddPlanContent_Button_Loction>

        <_.AddPlanContent_Button_Text>지정하기</_.AddPlanContent_Button_Text>
      </_.AddPlanContent_Button>
    </_.AddPlanContent_Container>
  );
};

export default AddPlanContent;

//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import { Harp_Logo } from 'assets/image/HARP_LOGO.tsx';

const Splash = () => {
	return (
		<_.Splash_Container>
			<_.Splash_Logo>
        <Harp_Logo />
      </_.Splash_Logo>
		</_.Splash_Container>
	);
};

export default Splash;

//라이브러리
import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

//파일
import * as _ from './style';
import BackIcon from 'assets/image/BackIcon';
import StatusBar1 from 'assets/image/StatusBar1';

interface HeaderProps {
	StatusBar: number;
}

const Header = ({ StatusBar }: HeaderProps) => {
	return (
		<_.Header_Container>
			<BackIcon />

			<_.Header_ProgressBar>
				{StatusBar == 1 ? <StatusBar1 /> : ''}
			</_.Header_ProgressBar>
		</_.Header_Container>
	);
};

export default Header;

//라이브러리
import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

//파일
import * as _ from './style';
import BackIcon from 'assets/image/BackIcon';
import StatusBar1 from 'assets/image/StatusBar1';
import StatusBar2 from 'assets/image/StatusBar2';
import StatusBar3 from 'assets/image/StatusBar3';

interface HeaderProps {
	StatusBar: number;
}

const Header = ({ StatusBar }: HeaderProps) => {
	return (
		<_.Header_Container>
			<BackIcon />

			<_.Header_ProgressBar>
				{StatusBar == 1 ? (
					<StatusBar1 />
				) : StatusBar == 2 ? (
					<StatusBar2 />
				) : (
					<StatusBar3 />
				)}
			</_.Header_ProgressBar>
		</_.Header_Container>
	);
};

export default Header;

//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import BackIcon from 'assets/image/BackIcon';
import StatusBar1 from 'assets/image/StatusBar1';
import StatusBar2 from 'assets/image/StatusBar2';
import StatusBar3 from 'assets/image/StatusBar3';

interface HeaderProps {
	StatusBar: number;
	title: string;
	buttonState: string;
	onClickMethod: () => void;
}

const Header = ({
	StatusBar = 0,
	title = '',
	buttonState = '',
	onClickMethod,
}: HeaderProps) => {
	return (
		<_.Header_Container>
			<_.Header_BackIcon>
				<BackIcon />
			</_.Header_BackIcon>

			{StatusBar == 1 ? (
				<_.Header_ProgressBar>
					<StatusBar1 />
				</_.Header_ProgressBar>
			) : StatusBar == 2 ? (
				<_.Header_ProgressBar>
					<StatusBar2 />
				</_.Header_ProgressBar>
			) : StatusBar == 3 ? (
				<_.Header_ProgressBar>
					<StatusBar3 />
				</_.Header_ProgressBar>
			) : (
				''
			)}

			{title == '' ? '' : <_.Header_Title>{title}</_.Header_Title>}

			{buttonState == '' ? (
				<_.Header_Button_Margin></_.Header_Button_Margin>
			) : (
				<_.Header_Button onClick={onClickMethod}>{buttonState}</_.Header_Button>
			)}
		</_.Header_Container>
	);
};

export default Header;

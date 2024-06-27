//라이브러리
import React from 'react';

//파일
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import * as _ from './style';
import Header from 'components/Header';

const Terms = () => {
	const statusBarHeight = useStatusBarHeight();

	return (
		<_.Terms_Container>
			<_.Terms_Layout StatusBarSize={`${statusBarHeight}px`}>
				<Header />
			</_.Terms_Layout>
		</_.Terms_Container>
	);
};

export default Terms;

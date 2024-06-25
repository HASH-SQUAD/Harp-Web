import React, { useEffect, useState } from 'react';
import * as _ from './style';

const Auth = () => {
	const [statusBarHeight, setStatusBarHeight] = useState(0);

	const onMessageEvent = (e: MessageEvent) => {
		e.stopPropagation();
		console.log(e.data);
		if (typeof e.data === 'string') {
			const height = parseInt(e.data, 10);
			if (!isNaN(height)) {
				setStatusBarHeight(height);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('message', onMessageEvent, { capture: true });
		return () => window.removeEventListener('message', onMessageEvent);
	}, []);

	return (
		<_.Auth_Container>
			<_.Auth_Layout StatusBarSize={`${statusBarHeight}px`}>
				Data {statusBarHeight}
			</_.Auth_Layout>
		</_.Auth_Container>
	);
};

export default Auth;

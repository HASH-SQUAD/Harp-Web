import { useRoutes } from 'react-router-dom';

import Splash from '../pages/splash/';

export default function Router() {
	return useRoutes([
		{
			path: '/',
			children: [{ path: 'splash', element: <Splash /> }],
		},
	]);
}

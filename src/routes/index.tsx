import { useRoutes } from 'react-router-dom';

import Splash from '../pages/splash/';
import Auth from 'pages/auth';
import Terms from 'pages/terms';

export default function Router() {
	return useRoutes([
		{
			path: '/',
			children: [
				{ path: 'splash', element: <Splash /> },
				{ path: 'auth', element: <Auth /> },
				{ path: 'Terms', element: <Terms /> },
			],
		},
	]);
}

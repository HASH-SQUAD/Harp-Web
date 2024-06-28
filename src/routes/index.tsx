import { useRoutes } from 'react-router-dom';

import Splash from '../pages/splash/';
import Auth from 'pages/auth';
import Terms from 'pages/terms';
import Info from 'pages/register/info';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { path: 'splash', element: <Splash /> },
        { path: 'auth', element: <Auth /> },
        { path: 'Terms', element: <Terms /> },
        { path: 'info', element: <Info /> }
      ]
    }
  ]);
}

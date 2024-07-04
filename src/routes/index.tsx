import { useRoutes } from 'react-router-dom';

import Splash from '../pages/splash/';
import Auth from 'pages/auth';
import Terms from 'pages/terms';
import Info from 'pages/register/info';
import SurveyEnd from '../pages/register/surveyEnd';
import SurveyStyle from 'pages/register/surveyStyle';
import SurveyFood from 'pages/register/surveyFood';
import SurveyMBTI from 'pages/register/surveyMBTI';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { path: 'splash', element: <Splash /> },
        { path: 'auth', element: <Auth /> },
        { path: 'terms', element: <Terms /> },
        { path: 'info', element: <Info /> },
        { path: 'surveyend', element: <SurveyEnd /> },
        { path: 'surveystyle', element: <SurveyStyle /> },
        { path: 'surveyfood', element: <SurveyFood /> },
        { path: 'surveymbti', element: <SurveyMBTI /> }
      ]
    }
  ]);
}

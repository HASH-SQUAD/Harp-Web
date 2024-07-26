import { useRoutes } from 'react-router-dom';

import Splash from '../pages/splash/';
import Auth from 'pages/auth';
import Home from 'pages/home';
import NotFound from 'pages/notfound';
// register
import Terms from 'pages/register/terms';
import Info from 'pages/register/info';
import SurveyStyle from 'pages/register/surveyStyle';
import SurveyFood from 'pages/register/surveyFood';
import SurveyMBTI from 'pages/register/surveyMBTI';
import SurveryTMI from 'pages/register/surveyTMI';
import SurveyEnd from 'pages/register/surveyEnd';
// plan
import Chat from 'pages/plan/chat';
import SelectDate from 'pages/plan/selectDate';
// profile
import Edit from 'pages/profile/edit';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { path: '/', element: <Home /> },
        { path: 'splash', element: <Splash /> },
        { path: 'auth', element: <Auth /> },
        { path: '*', element: <NotFound /> }
      ]
    },
    {
      path: '/register',
      children: [
        { path: 'terms', element: <Terms /> },
        { path: 'info', element: <Info /> },
        { path: 'surveystyle', element: <SurveyStyle /> },
        { path: 'surveyfood', element: <SurveyFood /> },
        { path: 'surveymbti', element: <SurveyMBTI /> },
        { path: 'surveytmi', element: <SurveryTMI /> },
        { path: 'surveyend', element: <SurveyEnd /> }
      ]
    },
    {
      path: 'plan',
      children: [
        { path: 'chat', element: <Chat /> },
        { path: 'selectdate', element: <SelectDate /> }
      ]
    },
    {
      path: '/profile',
      children: [{ path: 'edit', element: <Edit /> }]
    }
  ]);
}

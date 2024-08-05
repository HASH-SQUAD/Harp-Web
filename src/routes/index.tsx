import { useRoutes } from 'react-router-dom';

import Splash from '../pages/splash/';
import Auth from 'pages/auth';
import Home from 'pages/home';
import NotFound from 'pages/NotFound';
import Crop from 'pages/crop/index'
// register
import Terms from 'pages/register/terms';
import UserInfo from 'pages/register/userinfo';
import SurveyStyle from 'pages/register/surveyStyle';
import SurveyFood from 'pages/register/surveyFood';
import SurveyMBTI from 'pages/register/surveyMBTI';
import SurveryTMI from 'pages/register/surveyTMI';
import SurveyEnd from 'pages/register/surveyEnd';
// plan
import Chat from 'pages/plan/chat';
import SelectDate from 'pages/plan/selectDate';
import Info from 'pages/plan/info';
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
        { path: '*', element: <NotFound /> },
        { path: 'crop', element: <Crop /> }
      ]
    },
    {
      path: '/register',
      children: [
        { path: 'terms', element: <Terms /> },
        { path: 'userinfo', element: <UserInfo /> },
        { path: 'surveystyle', element: <SurveyStyle /> },
        { path: 'surveyfood', element: <SurveyFood /> },
        { path: 'surveymbti', element: <SurveyMBTI /> },
        { path: 'surveytmi', element: <SurveryTMI /> },
        { path: 'surveyend', element: <SurveyEnd /> }
      ]
    },
    {
      path: '/plan',
      children: [
        { path: 'chat', element: <Chat /> },
        { path: 'selectdate', element: <SelectDate /> },
        { path: 'info/:id', element: <Info /> }
      ]
    },
    {
      path: '/profile',
      children: [{ path: 'edit', element: <Edit /> }]
    }
  ]);
}

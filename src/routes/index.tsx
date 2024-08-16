import { useRoutes } from 'react-router-dom';

import Splash from 'pages/splash';
import Auth from 'pages/auth';
import Home from 'pages/home';
import NotFound from 'pages/notfound';
// register
import Terms from 'pages/register/terms';
import UserInfo from 'pages/register/userinfo';
import SurveyStyle from 'pages/register/surveystyle';
import SurveyFood from 'pages/register/surveyfood';
import SurveyMBTI from 'pages/register/surveymbti';
import SurveyTMI from 'pages/register/surveyTMI';
import SurveyEnd from 'pages/register/surveyend';
// plan
import Chat from 'pages/plan/chat';
import SelectDate from 'pages/plan/selectdate';
import Map from 'pages/plan/map';
import Info from 'pages/plan/info';
import Detail from 'pages/plan/memo';
import Update from 'pages/plan/update';
// profile
import Edit from 'pages/profile/edit';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        { path: 'splash', element: <Splash /> },
        { path: 'auth', element: <Auth /> },
        { path: '*', element: <NotFound /> }
      ]
    },
    {
      path: 'register',
      children: [
        { path: 'terms', element: <Terms /> },
        { path: 'userinfo', element: <UserInfo /> },
        { path: 'surveystyle', element: <SurveyStyle /> },
        { path: 'surveyfood', element: <SurveyFood /> },
        { path: 'surveymbti', element: <SurveyMBTI /> },
        { path: 'surveytmi', element: <SurveyTMI /> },
        { path: 'surveyend', element: <SurveyEnd /> }
      ]
    },
    {
      path: 'plan',
      children: [
        { path: 'chat', element: <Chat /> },
        { path: 'selectdate', element: <SelectDate /> },
        { path: 'map/:id', element: <Map /> },
        { path: 'info/:id', element: <Info /> },
        { path: 'info/:id/day/:planId', element: <Detail /> },
        { path: 'info/:id/day/:planId/update', element: <Update /> }
      ]
    },
    {
      path: 'profile',
      children: [{ path: 'edit', element: <Edit /> }]
    }
  ]);
}

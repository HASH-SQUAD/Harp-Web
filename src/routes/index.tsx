import { useRoutes } from 'react-router-dom';

import Splash from 'pages/splash';
import Auth from 'pages/auth';
import Home from 'pages/home';
import NotFound from 'pages/NotFound';

// register
import Terms from 'pages/register/terms';
import UserInfo from 'pages/register/userinfo';
import SurveyStyle from 'pages/register/surveyStyle';
import SurveyFood from 'pages/register/surveyFood';
import SurveyMBTI from 'pages/register/surveyMBTI';
import SurveyTMI from 'pages/register/surveyTMI';
import SurveyEnd from 'pages/register/surveyEnd';

// plan
import Chat from 'pages/plan/chat';
import SelectDate from 'pages/plan/selectDate';
import Info from 'pages/plan/info';
import Detail from 'pages/plan/memo';
import Update from 'pages/plan/update';
import AddSearch from 'pages/plan/add_search'

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
        { path: 'info/:id', element: <Info /> },
        { path: 'info/:id/day/:planId', element: <Detail /> },
        { path: 'info/:id/day/:planId/update', element: <Update /> },
        { path: 'info/:id/day/:planId/addsearch', element: <AddSearch /> }
      ]
    },
    {
      path: 'profile',
      children: [{ path: 'edit', element: <Edit /> }]
    }
  ]);
}

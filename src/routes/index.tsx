import { useRoutes } from "react-router-dom";

import Splash from "../pages/splash/";
import Auth from "pages/auth";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "splash", element: <Splash /> },
        { path: "auth", element: <Auth /> },
      ],
    },
  ]);
}

import { lazy } from "react";
// const DemoPage = lazy(() => import("../pages/Demo/DemoPage"));
const HomePage = lazy(() => import("../pages/Home/Home"));


const routes = [
    {
        path: "/",
        component: HomePage,
      },
      {
        path: "/home",
        component: HomePage,
      },
     
];
export default routes;
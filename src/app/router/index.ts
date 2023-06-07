import { createElement } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import Index, { MainContent } from "../../pages";
import RebornPink from "../../pages/reborn-pink";

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: createElement(Index),
    children: [
      {
        index: true,
        element: createElement(MainContent)
      },
      {
        path: "reborn-pink",
        element: createElement(RebornPink)
      }
    ]
  }
];
const router = createBrowserRouter(routes, {});

export default router;
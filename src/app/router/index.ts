import { createElement } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import Index, { MainContent } from "../../pages";
import RebornPink from "../../pages/reborn-pink";
import MoveFigure from "../../pages/move-figure";
import Limbo from "../../pages/limbo";

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
      },
      {
        path: "move-figure",
        element: createElement(MoveFigure)
      },
      {
        path: "limbo",
        element: createElement(Limbo)
      }
    ]
  }
];
const router = createBrowserRouter(routes, {});

export default router;
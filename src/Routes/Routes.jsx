import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Pages/Details";
import Installation from "../Pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("AppData.json"),
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "/Apps",
        Component: Apps,
      },
      {
        path: "/AppDetails/:id",
        Component: Details,
        loader: () => fetch("AppData.json"),
      },
      {
        path: "/Installation",
        Component: Installation,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

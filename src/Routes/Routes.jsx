import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Pages/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      {
        path: "Apps",
        loader: () => fetch("AppData.json"),
        Component: Apps,
      },
      {
        path: "Apps/:id",
        loader: ({ params }) => fetch("AppData.json"),
        Component: Details,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

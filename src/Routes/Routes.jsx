import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "Apps", Component: Apps },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

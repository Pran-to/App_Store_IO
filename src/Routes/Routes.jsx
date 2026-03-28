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
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, 
        path :'/', 
        Component: Home 
      },
      {
        path: "/Apps",
        loader: () => fetch("AppData.json"),
        Component: Apps,
      },
      {
        path: "/Apps/:id",
        loader: ({params}) => fetch("AppData.json"),
        Component: Details,
      },
      {
        path: "/Installation",
        Component: Installation,
      },
    ],
  },
]);

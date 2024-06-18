import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Main/Main";
import NewsDetailPage from "../pages/NewsDetailPage/NewsDetailPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/news",
        element: <NewsDetailPage />,
      }
    ]
  },
]);
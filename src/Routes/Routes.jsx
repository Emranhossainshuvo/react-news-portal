import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Main/Main";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);
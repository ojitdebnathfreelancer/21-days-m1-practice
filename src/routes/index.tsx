import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/login";
import Error from "../pages/404";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;

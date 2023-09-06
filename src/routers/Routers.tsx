import App from "../App";
import { Home, Source } from "../pages";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const Routers = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/source",
        element: <Source />,
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

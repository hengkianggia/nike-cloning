import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Route/Root";
import "./index.css";
import Home from "./Route/Home";
import Men from "./Route/Men";
import Women from "./Route/Women";
import Kids from "./Route/Kids";
import Sale from "./Route/Sale";
import Snkrs from "./Route/Snkrs";
import Coba from "./Coba";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        element: <Women />,
      },
      {
        path: "kids",
        element: <Kids />,
      },
      {
        path: "sale",
        element: <Sale />,
      },
      {
        path: "snkrs",
        element: <Snkrs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

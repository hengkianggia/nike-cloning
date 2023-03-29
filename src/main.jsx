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
import Feed from "./Route/SNKRS/Feed";
import InStock from "./Route/SNKRS/InStock";
import Upcoming from "./Route/SNKRS/Upcoming";

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
    ],
  },
  {
    path: "snkrs",
    element: <Snkrs />,
    children: [
      { index: true, element: <Feed /> },
      { path: "in-stock", element: <InStock /> },
      { path: "upcoming", element: <Upcoming /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

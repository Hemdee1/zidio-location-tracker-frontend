import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/signup.jsx";
import Profile from "./pages/profile.jsx";
import Map from "./pages/map/Map.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Map />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

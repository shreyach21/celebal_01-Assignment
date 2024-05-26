import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Profile from "./components/Profile.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )

  //   // [
  //   //   {
  //   //     path: "/",
  //   //     element: <App />,
  //   //   },
  //   //   {
  //   //     path: "/profile",
  //   //     element: <Profile />,
  //   //   },
  //   // ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

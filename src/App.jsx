import React from "react";
import Navbar from "./components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AllUser from "./pages/AllUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/all-user",
    element: <AllUser />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

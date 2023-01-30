import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Photo from "./pages/Photo";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Gallery from "./components/Gallery";
import "./style.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Gallery />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

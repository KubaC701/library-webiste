import React from 'react'
import ReactDOM from 'react-dom/client'

import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/login/Login";
import BookDetails from './components/bookdetails/BookDetails';
import BooksList from "./components/BooksList/BooksList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksList />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/bookdetails",
    element: <BookDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
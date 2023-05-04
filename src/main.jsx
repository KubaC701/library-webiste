import React from 'react'
import ReactDOM from 'react-dom/client'

import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/login/Login";
import BookDetails from './components/bookdetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/bookdetails",
    element: <BookDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
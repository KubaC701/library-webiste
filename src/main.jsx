import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import BookDetails from './components/bookdetails/BookDetails';
import BooksList from './components/BooksList/BooksList';
import ManageUsers from './components/ManageUsers/ManageUsers';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthContextProvider } from './contexts/AuthContext';
import users from './data/users.json';

localStorage.setItem('users', JSON.stringify(users));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <BooksList />
              </ProtectedRoute>
            }
          />
          <Route path="/bookdetails" element={<BookDetails />} />
          <Route path="/manage-users" element={<ManageUsers />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

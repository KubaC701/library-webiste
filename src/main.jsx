import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import './styles/variables.css';

import { AuthContextProvider } from './contexts/AuthContext';
import users from './data/users.json';
import { USERS } from './constants/users';
import Router from './components/Router/Router';

localStorage.setItem(USERS, JSON.stringify(users));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  </React.StrictMode>
);

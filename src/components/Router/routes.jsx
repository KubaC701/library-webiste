import BooksList from '../BooksList/BooksList';
import History from '../History/History';
import ManageBooks from '../ManageBooks/ManageBooks';
import ManageUsers from '../ManageUsers/ManageUsers';
import Login from '../Login/Login';
import { ROLES } from '../../constants/users';

export const ROUTES = [
  {
    path: '/',
    label: 'Home',
    roles: [],
    component: <BooksList />,
    isProtected: false,
  },
  {
    path: '/login',
    label: 'Login',
    roles: [],
    component: <Login />,
    isProtected: false,
  },
  {
    path: '/history',
    label: 'History',
    roles: [ROLES.USER, ROLES.LIBRARIAN, ROLES.ADMIN],
    component: <History />,
    isProtected: true,
  },
  {
    path: '/books',
    label: 'Manage books',
    roles: [ROLES.LIBRARIAN, ROLES.ADMIN],
    component: <ManageBooks />,
    isProtected: true,
  },
  {
    path: '/users',
    label: 'Manage users',
    roles: [ROLES.ADMIN],
    component: <ManageUsers />,
    isProtected: true,
  },
];

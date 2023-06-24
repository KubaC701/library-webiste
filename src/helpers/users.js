import { USERS } from '../constants/users';

export const getUsers = () => {
  return localStorage.getItem(USERS) ? JSON.parse(localStorage.getItem(USERS)) : [];
};

export const addUser = (user) => {
  const users = getUsers();
  localStorage.setItem(USERS, JSON.stringify([...users, user]));
};

export const removeUser = (email) => {
  const users = getUsers();
  localStorage.setItem(USERS, JSON.stringify(users.filter((user) => user.email !== email)));
};

export const authorizeUser = (email, password) => {
  const users = getUsers();

  const activeUser = users.find((user) => user.email === email && user.password === password);

  if (activeUser) {
    localStorage.setItem('active-user', JSON.stringify(activeUser));
  }

  return activeUser;
};

export const logoutUser = () => {
  localStorage.removeItem('active-user');
};

export const getActiveUser = () =>
  localStorage.getItem('active-user') ? JSON.parse(localStorage.getItem('active-user')) : null;

export const getIcon = (user) => {
  if (user.role === 'admin') {
    return '/icons/admin.png';
  } else if (user.role === 'librarian') {
    return '/icons/librarian.png';
  } else {
    return '/icons/customer.png';
  }
};

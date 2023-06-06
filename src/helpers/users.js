export const getUsers = () => {
  return localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
};

export const addUser = (user) => {
  const users = getUsers();
  localStorage.setItem('users', JSON.stringify([...users, user]));
};

export const removeUser = (login) => {
  const users = getUsers();
  localStorage.setItem('users', JSON.stringify(users.filter((user) => user.login !== login)));
};

export const authorizeUser = (login, password) => {
  const users = getUsers();

  const activeUser = users.find((user) => user.login === login && user.password === password);

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

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  LIBRARIAN: 'librarian',
};

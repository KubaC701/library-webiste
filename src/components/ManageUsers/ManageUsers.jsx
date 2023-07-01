import Layout from '../Layout/Layout';
import './manage-users.css';
import UsersItem from './UserItem';
import UserSearch from './UserSearch';
import { USERS } from '../../constants/users';
import { useState } from 'react';
import useSearch from '../../hooks/useSearch';
import AddUserModal from './AddUserModal';
import Button from '../Button/Button';

const ManageUsers = () => {
  const defaultUsers = localStorage.getItem(USERS);
  const [users, setUsers] = useState(defaultUsers ? JSON.parse(defaultUsers) : []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { query, setQuery, data: usersToDisplay } = useSearch(users, (user) => [user.email]);

  const handleDelete = (email) => {
    const newUsers = users.filter((user) => user.email !== email);
    setUsers(newUsers);
    localStorage.setItem(USERS, JSON.stringify(newUsers));
  };

  const handleAdd = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem(USERS, JSON.stringify(newUsers));
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <UserSearch query={query} setQuery={setQuery} />
      <Button
        type="button"
        className="user-search__add-user-button"
        onClick={() => setIsModalOpen(true)}
      >
        Add user
      </Button>
      <ul className="manage-users_list">
        {usersToDisplay.map((user) => (
          <UsersItem key={user.email} user={user} onDelete={handleDelete} />
        ))}
      </ul>
      {isModalOpen && <AddUserModal onSubmit={handleAdd} setIsModalOpen={setIsModalOpen} />}
    </Layout>
  );
};

export default ManageUsers;

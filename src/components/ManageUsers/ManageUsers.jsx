import Layout from '../Layout/Layout';
import './manage-users.css';
import users from '../../data/users.json';
import UsersItem from './UserItem';
import UserSearch from './UserSearch';

const ManageUsers = () => {
  return (
    <Layout>
      <UserSearch />
      <ul className="manage-users_list">
        {users.map((user) => (
          <UsersItem key={user.email} user={user} />
        ))}
      </ul>
    </Layout>
  );
};

export default ManageUsers;

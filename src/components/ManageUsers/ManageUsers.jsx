import Layout from '../Layout/Layout';
import './manage-users.css';
import users from '../../data/users.json';
import UsersItem from './UserItem';

const ManageUsers = () => {
  return (
    <Layout>
      <ul>
        {users.map((user) => (
          <UsersItem key={user.email} user={user} />
        ))}
      </ul>
    </Layout>
  );
};

export default ManageUsers;

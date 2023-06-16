import './manage-users.css';
import users from '../../data/users.json';
import UsersItem from './UserItem';

const ManageUsers = () => {
  return (
    <ul>
      {users.map((user) => (
        <UsersItem key={user.email} user={user} />
      ))}
    </ul>
  );
};

export default ManageUsers;

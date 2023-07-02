import Avatar from '../Header/Avatar';

const UserItem = ({ user, onDelete }) => (
  <li className="user-item">
    <Avatar user={user} />
    <p className="user-item__email">{user.email}</p>
    <button type="button" className="user-item_delete" onClick={() => onDelete(user.email)}>
      <img src={`/icons/recycle_bin.png`} />
    </button>
  </li>
);

export default UserItem;

const UserItem = ({ user }) => {
  const getIcon = () => {
    if (user.role === 'admin') {
      return 'admin.png';
    } else if (user.role === 'librarian') {
      return 'librarian.png';
    } else {
      return 'customer.png';
    }
  };
  const icon = getIcon();
  return (
    <li className="user-item">
      <img src={`/icons/${icon}`} /> {user.email}
    </li>
  );
};

export default UserItem;

function UserItem({ user }) {
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
      <img src={`/icons/${icon}`} />
      <p className="user-item__email">{user.email}</p>
      <button type="button" className="user-item_delete">
        <img src={`/icons/recycle_bin.png`} />
      </button>
    </li>
  );
}

export default UserItem;

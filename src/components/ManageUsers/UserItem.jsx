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
    <li className="useritem">
      <img src={`/icons/${icon}`} />
      <p className="useritem__email">{user.email}</p>
      <button type="active" className="useritem_delete">
        <img src={`/icons/recycle_bin.png`} />
      </button>
    </li>
  );
}

export default UserItem;

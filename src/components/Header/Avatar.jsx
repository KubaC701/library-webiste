const Avatar = ({ user }) => {
  if (!user) return null;

  const getIcon = (user) => {
    if (user.role === 'admin') {
      return '/icons/admin.png';
    } else if (user.role === 'librarian') {
      return '/icons/librarian.png';
    } else {
      return '/icons/customer.png';
    }
  };

  const icon = getIcon(user);
  return <img src={icon} alt={user.email} />;
};

export default Avatar;

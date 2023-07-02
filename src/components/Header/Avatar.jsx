import { getIcon } from '../../helpers/users';

const Avatar = ({ user }) => {
  if (!user) return null;

  const icon = getIcon(user);
  return <img src={icon} alt={user.email} />;
};

export default Avatar;

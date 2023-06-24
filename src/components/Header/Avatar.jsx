import useAuthContext from '../../contexts/AuthContext';
import { getIcon } from '../../helpers/users';

const Avatar = () => {
  const { user } = useAuthContext();

  const icon = getIcon(user);
  return <img src={icon} alt={user.email} />;
};

export default Avatar;

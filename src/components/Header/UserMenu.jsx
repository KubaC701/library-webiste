import { Link } from 'react-router-dom';
import useAuthContext from '../../contexts/AuthContext';
import Avatar from './Avatar';
import Button from '../Button/Button';

const UserMenu = ({ isActive, setIsActive }) => {
  const { user, signOut } = useAuthContext();

  const handleSignOut = () => {
    signOut();
    setIsActive(false);
  };
  return user ? (
    <div className="user-menu">
      <button type="button" className="user-menu__button" onClick={() => setIsActive(!isActive)}>
        <Avatar user={user} />
      </button>
      <nav className={`menu menu--user ${isActive ? 'menu--active' : ''}`}>
        <p className="user-menu__email">{user.email}</p>
        <Button className="menu__button" onClick={handleSignOut}>
          Sign out
        </Button>
      </nav>
    </div>
  ) : (
    <Link to="/login" className="button user-menu__sign-in">
      Sign in
    </Link>
  );
};

export default UserMenu;

import { Link } from 'react-router-dom';
import useAuthContext from '../../contexts/AuthContext';

import './Menu.css';
import { ROUTES } from '../Router/routes';

const Menu = ({ isActive, setIsActive }) => {
  const { user, signOut } = useAuthContext();

  const shouldHideLogin = (route) => route.label !== 'Login' || !user;

  const routesToDisplay = ROUTES.filter(
    (route) => shouldHideLogin(route) && (!route.isProtected || route.roles.includes(user?.role))
  );

  const handleSignOut = () => {
    signOut();
    setIsActive(false);
  };

  return (
    <nav className={`menu ${isActive ? 'menu--active' : ''}`}>
      <ul className="menu__list">
        {routesToDisplay.map((route) => (
          <li key={route.path} className="menu__list-item">
            <Link className="menu__link" to={route.path} onClick={() => setIsActive(!isActive)}>
              {route.label}
            </Link>
          </li>
        ))}
        <li>
          {user && (
            <button className="menu__button" onClick={handleSignOut}>
              Sign out
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

import { Link } from 'react-router-dom';
import useAuthContext from '../../contexts/AuthContext';
import { ROLES } from '../../helpers/users';
import './Menu.css';

const ROUTES = [
  {
    path: '/',
    label: 'Home',
    roles: [ROLES.USER, ROLES.LIBRARIAN, ROLES.ADMIN],
  },
  {
    path: '/history',
    label: 'History',
    roles: [ROLES.USER, ROLES.LIBRARIAN, ROLES.ADMIN],
  },
  {
    path: '/books',
    label: 'Manage books',
    roles: [ROLES.LIBRARIAN, ROLES.ADMIN],
  },
  {
    path: '/users',
    label: 'Manage users',
    roles: [ROLES.ADMIN],
  },
];

const Menu = ({ isActive, setIsActive }) => {
  const { user } = useAuthContext();
  const routesToDisplay = ROUTES.filter((route) => route.roles.includes(user.role));

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
      </ul>
    </nav>
  );
};

export default Menu;

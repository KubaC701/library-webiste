import { useState } from 'react';
import Hamburger from './Hamburger';
import './Header.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

const Header = ({ className }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isUserMenuActive, setIsUserMenuActive] = useState(false);

  return (
    <header className={`header ${className || ''}`}>
      <div className="header__menu">
        <Hamburger isActive={isMenuActive} setIsActive={setIsMenuActive} />
        <Menu isActive={isMenuActive} setIsActive={setIsMenuActive} />
      </div>
      <div>
        <Link to="/" className="header__logo-wrapper">
          <img src="/logo.png" alt="Motigu" className="header__logo" />
          <h1 className="header__heading">Motigu</h1>
        </Link>
      </div>
      <UserMenu isActive={isUserMenuActive} setIsActive={setIsUserMenuActive} />
    </header>
  );
};

export default Header;

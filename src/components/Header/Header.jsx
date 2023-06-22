import { useState } from 'react';
import Hamburger from './Hamburger';
import './Header.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Header = ({ className }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <header className={`header ${className || ''}`}>
      <div className="header__menu">
        <Hamburger isActive={isMenuActive} setIsActive={setIsMenuActive} />
        <Menu isActive={isMenuActive} setIsActive={setIsMenuActive} />
      </div>
      <Link to="/" className="header__logo-wrapper">
        <img src="/logo.png" alt="Motigu" className="header__logo" />
        <h1 className="header__heading">Motigu</h1>
      </Link>
    </header>
  );
};

export default Header;

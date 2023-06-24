import Header from '../Header/Header';
import './Layout.css';

const Layout = ({ children, className, noPadding }) => {
  return (
    <main className={`container ${className || ''} ${noPadding ? 'container--no-padding' : ''}`}>
      <Header className={`${noPadding ? 'header--own-padding' : ''}`} />
      {children}
    </main>
  );
};

export default Layout;

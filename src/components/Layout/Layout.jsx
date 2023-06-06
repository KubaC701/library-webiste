import Header from '../Header/Header';
import './Layout.css';

const Layout = ({ children, className }) => {
  return (
    <main className={`container ${className}`}>
      <Header />
      {children}
    </main>
  );
};

export default Layout;

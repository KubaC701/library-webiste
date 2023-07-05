import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import './NotFound.css';

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found">
        <img
          src="/404.png"
          alt="Cat with a 404 error text"
          className="not-found__image"
          width={2000}
          height={2000}
        />
        <h1>Page not found</h1>
        <Link to="/" className="button button--big not-found__button">
          Go back to home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;

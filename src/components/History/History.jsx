import './History.css';
import useAuthContext from '../../contexts/AuthContext';
import Layout from '../Layout/Layout';
import useBooksContext from '../../contexts/BooksContext';
import { HISTORY } from '../../constants/books';

import { Link } from 'react-router-dom';
import HistoryItem from './HistoryItem';

const History = () => {
  const historyData = JSON.parse(localStorage.getItem(HISTORY));

  const { user } = useAuthContext();
  const { books } = useBooksContext();
  const userHistory = historyData?.[user.email];

  const booksToDisplay = userHistory
    ? Object.entries(userHistory).map(([id, history]) => {
        const book = books.find((bookData) => bookData.id === parseInt(id, 10));
        return {
          ...history,
          ...book,
        };
      })
    : [];

  return (
    <Layout className="history__container" noPadding>
      <div className="history__headings">
        <h1 className="history__user-name">{user.email}</h1>
        <h2 className="history__h2">Your history</h2>
      </div>

      {booksToDisplay.length > 0 ? (
        <div className="history__list">
          {booksToDisplay.map((book) => (
            <HistoryItem book={book} key={book.id} />
          ))}
        </div>
      ) : (
        <div className="history__no-books">
          <p className="history__no-books-info">
            You haven&apos;t got any books in your history yet
          </p>
          <Link to="/" className="history__no-books-link">
            Find a perfect book for yourself!
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default History;

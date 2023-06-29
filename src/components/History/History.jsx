import './history.css';
import useAuthContext from '../../contexts/AuthContext';
import Layout from '../Layout/Layout';
import useBooksContext from '../../contexts/BooksContext';
import { HISTORY, STATUSES } from '../../constants/books';
import { formatDate, isInThePast } from '../../helpers/date';

const History = () => {
  const historyData = JSON.parse(localStorage.getItem(HISTORY));

  const { user } = useAuthContext();
  const { books } = useBooksContext();
  const userHistory = historyData[user.email];

  const booksToDisplay = Object.entries(userHistory).map(([id, history]) => {
    const book = books.find((bookData) => bookData.id === parseInt(id, 10));
    return {
      ...history,
      ...book,
    };
  });

  const setStatus = (book) => {
    switch (book.status) {
      case STATUSES.AVAILABLE:
        return 'Returned';
      case STATUSES.RESERVED:
        return isInThePast(book.to) ? 'Reservation cancelled' : 'Reserved';
      case STATUSES.BORROWED:
        return isInThePast(book.to) ? 'Overdue' : 'Borrowed';
      default:
        return '';
    }
  };

  return (
    <Layout className="history__container" noPadding>
      <section>
        <h1 className="history__user-name history__h1">John Doe</h1>
        <h2 className="history__h2">Your history</h2>
      </section>

      <div className="history__list">
        {booksToDisplay.map((book) => (
          <div className="history__item" key={book.id}>
            <div className="history_value">
              <img src={book.thumbnail} alt={book.title} className="history__value" />
            </div>
            <div className="history_value">
              <div className="history__line">
                <h3 className="history__h3">Title:</h3>
                <p className="history__p">{book.title}</p>
              </div>
              <div className="history__line">
                <h3 className="history__h3">Author:</h3>
                <p className="history__p"> {book.author}</p>
              </div>
              <div className="history__line">
                <h3 className="history__h3">From:</h3>
                <p className="history__p">{formatDate(book.from)}</p>
              </div>
              <div className="history__line">
                <h3 className="history__h3">To:</h3>
                <p className="history__p">{formatDate(book.to)}</p>
              </div>
              <div className="history__line">
                <h3 className="history__h3">Status:</h3>
                <p className="history__p">{setStatus(book)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default History;

import { STATUSES } from '../../constants/books';
import { formatDate } from '../../helpers/date';

const EditBookHistory = ({ book }) => {
  const setStatus = (action) => {
    switch (action.status) {
      case STATUSES.AVAILABLE:
        return 'returned';
      case STATUSES.RESERVED:
        return 'reserved';
      case STATUSES.BORROWED:
        return 'borrowed';
      default:
        return '';
    }
  };

  return (
    <section className="edit-book-history__container">
      <h2 className="edit-book-history__h2">History</h2>
      <ul className="edit-book-history__list">
        {book.history.length > 0 ? (
          book.history.map((historyItem) => (
            <li
              className="edit-book-history__item"
              key={`${historyItem.from}${historyItem.to}${historyItem.status}`}
            >
              <span className="edit-book-history__date"> {formatDate(historyItem.from)}</span>{' '}
              {historyItem.user} {setStatus(historyItem)} a book
            </li>
          ))
        ) : (
          <p>Nobody borrowed this book yet</p>
        )}
      </ul>
    </section>
  );
};

export default EditBookHistory;

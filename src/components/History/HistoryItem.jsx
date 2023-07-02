import { STATUSES } from '../../constants/books';
import { formatDate, isInThePast } from '../../helpers/date';
const HistoryItem = ({ book }) => {
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
    <div className="history-item" key={book.id}>
      <div className="history-item__wrapper">
        <img src={book.thumbnail} alt={book.title} className="history__thumbnail" />
        <div className="history-item__values">
          <div className="history-item__line">
            <h3 className="history-item__label">Title:</h3>
            <p className="history-item__value">{book.title}</p>
          </div>
          <div className="history-item__line">
            <h3 className="history-item__label">Author:</h3>
            <p className="history-item__value"> {book.author}</p>
          </div>
          <div className="history-item__line">
            <h3 className="history-item__label">From:</h3>
            <p className="history-item__value">{formatDate(book.from)}</p>
          </div>
          <div className="history-item__line">
            <h3 className="history-item__label">To:</h3>
            <p className="history-item__value">{formatDate(book.to)}</p>
          </div>
          <div className="history-item__line">
            <h3 className="history-item__label">Status:</h3>
            <p className="history-item__value">{setStatus(book)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;

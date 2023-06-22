import { Link } from 'react-router-dom';
import ReservationActions from './ReservationActions';

const ManageBooksItem = ({ book }) => {
  return (
    <li className="manage-books-item">
      <Link to={`/books/${book.id}`} className="manage-books-item__link">
        <div className="manage-books-item__details">
          <img
            src={book.thumbnail}
            alt={book.title}
            className="manage-books-item__thumbnail"
            width={170}
            height={243}
          />
          <div>
            <h4 className="manage-books-item__author">{book.author}</h4>
            <h3 className="manage-books-item__title">{book.title}</h3>
          </div>
        </div>
      </Link>
      <ReservationActions book={book} />
    </li>
  );
};

export default ManageBooksItem;

import { Link } from 'react-router-dom';

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
        <div className="manage-books-item__actions">
          <button className="manage-books-item__button">Mark as borrowed</button>
          {book.reservation && (
            <p className="manage-books-item__reservation">{book.reservation.user}</p>
          )}
        </div>
      </Link>
    </li>
  );
};

export default ManageBooksItem;

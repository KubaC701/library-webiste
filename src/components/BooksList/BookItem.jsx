import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../contexts/AuthContext';
import { reserveBook, returnBook } from '../../store/books/actions';
import useBooksContext from '../../contexts/BooksContext';
import { STATUSES, THUMBNAIL_DIMENSIONS } from '../../constants/books';

const BookItem = ({ book }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { dispatch } = useBooksContext();

  const makeReservation = (book) => {
    if (!user) navigate('/login');
    dispatch(reserveBook(book, user.email));
  };

  const cancelReservation = (book) => {
    dispatch(returnBook(book, user.email));
  };

  const getButtonState = (book) => {
    if (book.status === STATUSES.RESERVED) {
      if (book.reservation?.user === user?.email) {
        return {
          disabled: false,
          text: 'Cancel reservation',
          onClick: () => cancelReservation(book),
        };
      }
      return { disabled: true, text: 'Reserved' };
    }
    return { disabled: false, text: 'Reserve', onClick: () => makeReservation(book) };
  };

  const { disabled, text, onClick } = getButtonState(book);

  return (
    <div className="booksearch__item" type="button" key={`${book.title} ${book.author}`}>
      <div>
        <img
          src={book.thumbnail}
          alt={book.title}
          className="booksearch__thumbnail"
          width={THUMBNAIL_DIMENSIONS.WIDTH}
          height={THUMBNAIL_DIMENSIONS.HEIGHT}
        />
      </div>
      <div>
        <h1 className="booksearch__h1">{book.title}</h1>
        <h2 className="middlecolor booksearch__h2">{book.author}</h2>
      </div>
      <div>
        <button type="submit" className="booksearch__button" onClick={onClick} disabled={disabled}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default BookItem;

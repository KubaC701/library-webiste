import { THUMBNAIL_DIMENSIONS } from '../../constants/books';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import useReservationButton from '../../hooks/useReservationButton';

const BookItem = ({ book }) => {
  const { onClick, disabled, text } = useReservationButton(book);

  return (
    <li className="booksearch__item" key={`${book.title} ${book.author}`}>
      <div className="booksearch__info">
        <img
          src={book.thumbnail}
          alt={book.title}
          className="booksearch__thumbnail"
          width={THUMBNAIL_DIMENSIONS.WIDTH}
          height={THUMBNAIL_DIMENSIONS.HEIGHT}
        />
        <Link to={`/books/${book.id}`} className="booksearch__link">
          <span className="booksearch__title">{book.title}</span>
          <span className=" booksearch__author">{book.author}</span>
        </Link>
      </div>
      <div className="booksearch__button-wrapper">
        <Button
          type="button"
          size="small"
          className="booksearch__button"
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </Button>
      </div>
    </li>
  );
};

export default BookItem;

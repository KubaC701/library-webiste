import { THUMBNAIL_DIMENSIONS } from '../../constants/books';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import useReservationButton from '../../hooks/useReservationButton';

const BookItem = ({ book }) => {
  const { onClick, disabled, text } = useReservationButton(book);

  return (
    <li className="booksearch__item" key={`${book.title} ${book.author}`}>
      <img
        src={book.thumbnail}
        alt={book.title}
        className="booksearch__thumbnail"
        width={THUMBNAIL_DIMENSIONS.WIDTH}
        height={THUMBNAIL_DIMENSIONS.HEIGHT}
      />
      <Link to={`/books/${book.id}`} className="booksearch__link">
        <p className="booksearch__title">{book.title}</p>
        <p className=" booksearch__author">{book.author}</p>
      </Link>
      <Button
        type="button"
        size="small"
        className="booksearch__button"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </Button>
    </li>
  );
};

export default BookItem;

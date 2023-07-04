import './book-details.css';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import useBooksContext from '../../contexts/BooksContext';
import { findById } from '../../helpers/books';
import Button from '../Button/Button';
import useReservationButton from '../../hooks/useReservationButton';
import { THUMBNAIL_DIMENSIONS } from '../../constants/books';

const BookDetails = () => {
  const { id } = useParams();
  const { books } = useBooksContext();
  const currentBook = findById(id, books);
  const { onClick, disabled, text } = useReservationButton(currentBook);

  return (
    <Layout>
      <h1 className="book-details__title">{currentBook.title}</h1>
      <h2 className="book-details__author">{currentBook.author}</h2>
      <div className="book-details__info">
        <img
          src={currentBook.thumbnail}
          alt={currentBook.title}
          className="book-details__cover"
          width={THUMBNAIL_DIMENSIONS.WIDTH}
          height={THUMBNAIL_DIMENSIONS.HEIGHT}
        />
        <div className="book-details__description-wrapper">
          <h2 className="book-details__subheading">Description</h2>
          <p className="book-details__description">{currentBook.description}</p>
        </div>
      </div>
      <Button className="book-details__button" size="big" onClick={onClick} disabled={disabled}>
        {text}
      </Button>
      <p className="book-details__reservation">
        After reservation you’ll have 3 days to pick up you book from the library after this time
        your reservation will be cancelled
      </p>
    </Layout>
  );
};

export default BookDetails;

import './book-details.css';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import useBooksContext from '../../contexts/BooksContext';
import { findById } from '../../helpers/books';

const BookDetails = () => {
  const { id } = useParams();
  const { books } = useBooksContext();
  const currentBook = findById(id, books);

  return (
    <Layout className="book-details">
      <div className="book-details__form-wrapper">
        <section>
          <h1 className="book-details__title">{currentBook.title}</h1>
          <h2 className="book-details__author">{currentBook.author}</h2>
        </section>
        <img src={currentBook.thumbnail} alt={currentBook.title} className="book-details__cover" />
        <button type="submit" className="book-details__button">
          Reserve
        </button>
        <span className="book-details__reservation">
          After reservation you’ll have 3 days to pick up you book from the library after this time
          your reservation will be cancelled
        </span>
        <h2 className="book-details__subheading">Description</h2>
        <p className="book-details__description">{currentBook.description}</p>
      </div>
    </Layout>
  );
};

export default BookDetails;

import './books-list.css';

import Layout from '../Layout/Layout';
import useBooksContext from '../../contexts/BooksContext';
import BookItem from './BookItem';

const BookSearch = () => {
  const { books } = useBooksContext();

  return (
    <Layout>
      <div className="booksearch__container">
        <div className="booksearch__search">
          <input
            className="booksearch__input"
            type="text"
            name="search"
            id="search"
            placeholder="Book's title"
          />

          <button type="submit" className="booksearch__search-button">
            Search
          </button>
        </div>

        <div className="booksearch__items">
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
        <span className="booksearch__span">
          After reservation you’ll have 3 days to pick up you book from the library after this time
          your reservation will be cancelled
        </span>
      </div>
    </Layout>
  );
};

export default BookSearch;

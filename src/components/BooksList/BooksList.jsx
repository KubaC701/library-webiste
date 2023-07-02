import './books-list.css';

import Layout from '../Layout/Layout';
import useBooksContext from '../../contexts/BooksContext';
import BookItem from './BookItem';
import Input from '../Input/Input';
import useSearch from '../../hooks/useSearch';

const BookSearch = () => {
  const { books } = useBooksContext();
  const {
    data: filteredBooks,
    query,
    setQuery,
  } = useSearch(books, (book) => [book.title, book.author]);

  return (
    <Layout>
      <div className="booksearch__container">
        <Input
          className="booksearch__input"
          type="text"
          name="search"
          id="search"
          placeholder="Book's title or author"
          query={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ul className="booksearch__items">
          {filteredBooks.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default BookSearch;

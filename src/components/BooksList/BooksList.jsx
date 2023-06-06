import books from '../../data/books.json';
import BooksItem from './BookItem';
import Layout from '../Layout/Layout';

const BooksList = () => {
  return (
    <Layout>
      <ul>
        {books.map((book) => (
          <BooksItem key={`${book.title} ${book.author}`} book={book} />
        ))}
      </ul>
    </Layout>
  );
};

export default BooksList;

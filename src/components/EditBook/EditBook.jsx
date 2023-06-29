import Layout from '../Layout/Layout';
import './edit-book.css';
import BookEdition from './EditBookEdition';
import BookHistory from './EditBookHistory';
import BookAction from './EditBookAction';
import { useParams } from 'react-router-dom';
import useBooksContext from '../../contexts/BooksContext';

const EditBook = () => {
  const { id } = useParams();
  const { books } = useBooksContext();
  const currentBook = books.find((book) => book.id === parseInt(id));

  return (
    <Layout>
      <BookEdition currentBook={currentBook} />
      <BookHistory />
      <BookAction />
    </Layout>
  );
};

export default EditBook;

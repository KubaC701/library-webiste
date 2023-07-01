import Layout from '../Layout/Layout';
import './edit-book.css';
import EditBookForm from './EditBookForm';
import EditBookHistory from './EditBookHistory';
import EditBookAction from './EditBookAction';
import { useParams } from 'react-router-dom';
import useBooksContext from '../../contexts/BooksContext';

const EditBook = () => {
  const { id } = useParams();
  const { books } = useBooksContext();
  const currentBook = books.find((book) => book.id === parseInt(id));

  return (
    <Layout>
      <EditBookForm currentBook={currentBook} />
      <EditBookHistory />
      <EditBookAction />
    </Layout>
  );
};

export default EditBook;

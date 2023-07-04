import Layout from '../Layout/Layout';
import './edit-book.css';
import EditBookHistory from './EditBookHistory';
import EditBookAction from './EditBookAction';
import { useParams } from 'react-router-dom';
import useBooksContext from '../../contexts/BooksContext';
import { findById } from '../../helpers/books';
import BookForm, { BOOK_FORM_TYPES } from '../BookForm/BookForm';

const EditBook = () => {
  const { id } = useParams();
  const { books } = useBooksContext();
  const currentBook = findById(id, books);

  if (!currentBook) {
    return null;
  }

  return (
    <Layout>
      <BookForm book={currentBook} type={BOOK_FORM_TYPES.EDIT} />
      <EditBookHistory book={currentBook} />
      <EditBookAction book={currentBook} />
    </Layout>
  );
};

export default EditBook;

import Layout from '../Layout/Layout';
import './edit-book.css';
import BookEdition from './EditBookEdition';
import BookHistory from './EditBookHistory';
import BookAction from './EditBookAction';

const EditBook = () => {
  return (
    <Layout>
      <BookEdition />
      <BookHistory />
      <BookAction />
    </Layout>
  );
};

export default EditBook;

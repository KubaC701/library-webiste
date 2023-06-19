import Layout from '../Layout/Layout';
import './History.css';
import BookEdition from './BookEdition';
import BookHistory from './BookHistory';
import BookAction from '../EditBook/BookAction';

const History = () => {
  return (
    <Layout>
      <BookEdition />
      <BookHistory />
      <BookAction />
    </Layout>
  );
};

export default History;

import useBooksContext from '../../contexts/BooksContext';
import Layout from '../Layout/Layout';
import ManageBooksItem from './ManageBooksItem';
import './ManageBooks.css';
import { STATUSES } from '../../constants/books';

import useSearch from '../../hooks/useSearch';

const ManageBooks = () => {
  const { books } = useBooksContext();

  const {
    data: filteredBooks,
    query,
    setQuery,
  } = useSearch(books, (book) => [book.title, book.author, book.reservation?.user]);

  return (
    <Layout className="manage-books" noPadding>
      <div className="manage-books__filters">
        <input
          type="text"
          placeholder="Search by book name, author or user email"
          className="manage-books__search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className="manage-books__select">
          <option value="SHOW_ALL" className="manage-books__option">
            Show all
          </option>
          {Object.values(STATUSES).map((status) => (
            <option key={status} value={status} className="manage-books__option">
              {status.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <ul className="manage-books__list">
        {filteredBooks.map((book) => (
          <ManageBooksItem key={book.id} book={book} />
        ))}
      </ul>
    </Layout>
  );
};

export default ManageBooks;

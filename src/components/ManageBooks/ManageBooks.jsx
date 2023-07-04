import useBooksContext from '../../contexts/BooksContext';
import Layout from '../Layout/Layout';
import ManageBooksItem from './ManageBooksItem';
import './ManageBooks.css';
import { STATUSES } from '../../constants/books';

import useSearch from '../../hooks/useSearch';
import Select from '../Select/Select';
import Input from '../Input/Input';
import { useState } from 'react';
import Button from '../Button/Button';

import Modal from '../Modal/Modal';
import BookForm, { BOOK_FORM_TYPES } from '../BookForm/BookForm';

const SHOW_ALL = 'SHOW_ALL';

const ManageBooks = () => {
  const { books } = useBooksContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: filteredBooks,
    query,
    setQuery,
  } = useSearch(books, (book) => [book.title, book.author, book.reservation?.user, book.status]);

  const handleSelectChange = (e) => {
    const status = e.target.value;
    if (status === SHOW_ALL) {
      setQuery('');
    } else {
      setQuery(status);
    }
  };

  const filterOptions = [
    {
      value: SHOW_ALL,
      label: 'Show all',
    },
    ...Object.values(STATUSES).map((status) => ({
      value: status,
      label: status[0] + status.slice(1).toLowerCase(),
    })),
  ];

  return (
    <Layout className="manage-books" noPadding>
      <div className="manage-books__filters">
        <Input
          type="text"
          placeholder="Search by book name, author or user email"
          className="manage-books__search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Select options={filterOptions} onChange={handleSelectChange} />
      </div>
      <Button className="manage-books__add" onClick={() => setIsModalOpen(true)}>
        Add book
      </Button>
      <ul className="manage-books__list">
        {filteredBooks.map((book) => (
          <ManageBooksItem key={book.id} book={book} />
        ))}
      </ul>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <BookForm type={BOOK_FORM_TYPES.ADD} onSubmit={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </Layout>
  );
};

export default ManageBooks;

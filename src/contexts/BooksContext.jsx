import { createContext, useContext, useEffect, useReducer } from 'react';
import { v4 as uuid } from 'uuid';

import booksReducer from '../store/books/reducer';
import booksLibrary from '../data/books.json';
import { BOOKS, STATUSES } from '../constants/books';

const BooksContext = createContext({});

const initialState = localStorage.getItem(BOOKS)
  ? JSON.parse(localStorage.getItem(BOOKS))
  : booksLibrary.map((book) => ({
      ...book,
      status: STATUSES.AVAILABLE,
      reservation: null,
      history: [],
      id: uuid(),
    }));

export const BooksContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(booksReducer, initialState);

  const value = { books, dispatch };

  useEffect(() => {
    localStorage.setItem(BOOKS, JSON.stringify(books));
  }, [books]);

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};

const useBooksContext = () => {
  const context = useContext(BooksContext);

  if (context === undefined) {
    throw new Error('useBooksContext must be used within a BooksContextProvider');
  }

  return context;
};

export default useBooksContext;

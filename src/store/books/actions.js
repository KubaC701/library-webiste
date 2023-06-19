import { STATUSES } from '../../constants/books';

export const ACTION_TYPES = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  UPDATE_BOOK: 'UPDATE_BOOK',
};

export const addBook = (book) => ({
  type: ACTION_TYPES.ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: ACTION_TYPES.REMOVE_BOOK,
  payload: book,
});

export const updateBook = (book) => ({
  type: ACTION_TYPES.UPDATE_BOOK,
  payload: book,
});

const setBookStatus = (book, user, status) => {
  const reservation = {
    user,
    date: new Date(),
  };

  return {
    type: ACTION_TYPES.UPDATE_BOOK,
    payload: {
      ...book,
      status,
      reservation,
      history: [
        ...book.history,
        {
          ...reservation,
          status,
        },
      ],
    },
  };
};
export const borrowBook = (book, user) => setBookStatus(book, user, STATUSES.BORROWED);
export const reserveBook = (book, user) => setBookStatus(book, user, STATUSES.RESERVED);

export const returnBook = (book) => {
  return {
    type: ACTION_TYPES.UPDATE_BOOK,
    payload: {
      ...book,
      status: STATUSES.AVAILABLE,
      reservation: null,
      history: [
        ...book.history,
        {
          user: book.reservation.user,
          date: new Date(),
          status: STATUSES.AVAILABLE,
        },
      ],
    },
  };
};

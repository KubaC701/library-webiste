import { STATUSES } from '../../constants/books';
import { addDays } from '../../helpers/date';
import { saveActionToHistory } from '../../helpers/history';

import { v4 as uuid } from 'uuid';

export const ACTION_TYPES = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  UPDATE_BOOK: 'UPDATE_BOOK',
};

export const addBook = (book) => ({
  type: ACTION_TYPES.ADD_BOOK,
  payload: { id: uuid(), ...book },
});

export const removeBook = (book) => ({
  type: ACTION_TYPES.REMOVE_BOOK,
  payload: book,
});

export const updateBook = (book) => ({
  type: ACTION_TYPES.UPDATE_BOOK,
  payload: book,
});

const setBookStatus = ({ book, user, status, from, to }) => {
  const reservation = {
    user,
    from,
    to,
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
export const borrowBook = (book, user) => {
  const today = new Date();
  const DAYS_TO_RETURN = 30;
  const from = today;
  const to = addDays(today, DAYS_TO_RETURN);

  saveActionToHistory({
    from,
    to,
    book,
    user,
  });

  return setBookStatus({
    book,
    user,
    status: STATUSES.BORROWED,
    from,
    to,
  });
};
export const reserveBook = (book, user) => {
  const today = new Date();
  const DAYS_TO_EXPIRATION = 3;
  const from = today;
  const to = addDays(today, DAYS_TO_EXPIRATION);

  saveActionToHistory({
    from,
    to,
    book,
    user,
  });

  return setBookStatus({
    book,
    user,
    from,
    to,
    status: STATUSES.RESERVED,
  });
};

export const returnBook = (book) => {
  const today = new Date();
  const from = book.reservation.from;
  const to = today;
  saveActionToHistory({
    from,
    to,
    book,
    user: book.reservation.user,
  });

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
          from: today,
          to: null,
          status: STATUSES.AVAILABLE,
        },
      ],
    },
  };
};

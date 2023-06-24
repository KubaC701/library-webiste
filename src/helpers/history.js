import { HISTORY } from '../constants/books';

export const saveActionToHistory = ({ book, user, from, to }) => {
  const history = JSON.parse(localStorage.getItem(HISTORY)) || {};

  localStorage.setItem(
    HISTORY,
    JSON.stringify({
      ...history,
      [user]: { ...history[user], [book.id]: { from, to } },
    })
  );
};

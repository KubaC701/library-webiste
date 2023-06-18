import { ACTION_TYPES } from './booksActions';

const booksReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.ADD_BOOK:
      return [...state, payload];
    case ACTION_TYPES.REMOVE_BOOK:
      return state.filter((book) => book.id !== payload.id);
    case ACTION_TYPES.UPDATE_BOOK:
      return state.map((book) => {
        if (book.id === payload.id) {
          return { ...book, ...payload };
        }
        return book;
      });
    default:
      return state;
  }
};

export default booksReducer;

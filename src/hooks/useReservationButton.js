import { useNavigate } from 'react-router-dom';
import useAuthContext from '../contexts/AuthContext';
import useBooksContext from '../contexts/BooksContext';
import { reserveBook, returnBook } from '../store/books/actions';
import { STATUSES } from '../constants/books';

const useReservationButton = (book) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { dispatch } = useBooksContext();

  const makeReservation = (book) => {
    if (!user) navigate('/login');
    dispatch(reserveBook(book, user.email));
  };

  const cancelReservation = (book) => {
    dispatch(returnBook(book, user.email));
  };

  const getButtonState = () => {
    if (book.status === STATUSES.RESERVED) {
      if (book.reservation?.user === user?.email) {
        return {
          disabled: false,
          text: 'Cancel reservation',
          onClick: () => cancelReservation(book),
        };
      }
      return { disabled: true, text: 'Reserved' };
    }
    if (book.status === STATUSES.BORROWED) return { disabled: true, text: 'Borrowed' };
    return { disabled: false, text: 'Reserve', onClick: () => makeReservation(book) };
  };

  return getButtonState();
};

export default useReservationButton;

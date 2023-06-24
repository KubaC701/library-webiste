import { useState } from 'react';
import { STATUSES } from '../../constants/books';
import useBooksContext from '../../contexts/BooksContext';
import { borrowBook, returnBook } from '../../store/books/actions';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import Button from '../Button/Button';

const ReservationActions = ({ book }) => {
  const { dispatch } = useBooksContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleBorrowFromScratch = (event) => {
    event.preventDefault();
    dispatch(borrowBook(book, userEmail));
    setIsModalOpen(false);
  };
  const handleReturn = () => {
    dispatch(returnBook(book));
  };
  const handleBorrowFromReservation = () => {
    dispatch(borrowBook(book, book.reservation.user));
  };

  const statuses = {
    [STATUSES.BORROWED]: {
      buttonLabel: 'Mark as returned',
      reservationLabel: 'Borrowed by ',
      onClick: handleReturn,
    },
    [STATUSES.AVAILABLE]: {
      buttonLabel: 'Mark as borrowed',
      reservationLabel: '',
      onClick: openModal,
    },
    [STATUSES.RESERVED]: {
      buttonLabel: 'Mark as borrowed',
      reservationLabel: 'Reserved by ',
      onClick: handleBorrowFromReservation,
    },
  };

  const state = statuses[book.status];

  return (
    <div className="reservation-actions">
      <Button className="reservation-actions__button" onClick={state.onClick}>
        {state.buttonLabel}
      </Button>
      {book.reservation && (
        <p className="reservation-actions__reservation">
          {state.reservationLabel}
          {book.reservation?.user}
        </p>
      )}
      {isModalOpen && (
        <Modal>
          <form onSubmit={handleBorrowFromScratch}>
            <label htmlFor="email" className="reservation-actions__label">
              Enter the email address of user who borrowed the book
            </label>
            <Input
              className="reservation-actions__input"
              type="text"
              value={userEmail}
              id="email"
              onChange={(event) => setUserEmail(event.target.value)}
            />
            <Button type="submit">Borrow</Button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ReservationActions;

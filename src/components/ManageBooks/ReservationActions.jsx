import { useState } from 'react';
import { STATUSES } from '../../constants/books';
import useBooksContext from '../../contexts/BooksContext';
import { borrowBook, returnBook } from '../../store/books/actions';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useFormValidation from '../../hooks/useFormValidation';

const ReservationActions = ({ book }) => {
  const { dispatch } = useBooksContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const { validate, errors, clearError } = useFormValidation({
    email: userEmail,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleBorrowFromScratch = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
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
        <Modal setIsModalOpen={setIsModalOpen}>
          <form onSubmit={handleBorrowFromScratch} className="reservation-actions__form">
            <label htmlFor="email" className="reservation-actions__label">
              Enter the email address of user who borrowed the book
            </label>
            <Input
              className="reservation-actions__input"
              type="text"
              value={userEmail}
              id="email"
              onChange={(event) => {
                clearError('email');
                setUserEmail(event.target.value);
              }}
              error={errors.email}
            />
            <Button type="submit" className="reservation-actions__borrow">
              Borrow
            </Button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ReservationActions;

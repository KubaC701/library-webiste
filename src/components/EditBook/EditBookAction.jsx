import { useNavigate } from 'react-router-dom';
import useBooksContext from '../../contexts/BooksContext';
import { removeBook } from '../../store/books/actions';
import Button from '../Button/Button';

const EditBookAction = ({ book }) => {
  const { dispatch } = useBooksContext();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(removeBook(book));
    navigate(-1);
  };

  return (
    <>
      <Button
        type="button"
        variant="dangerous"
        className="edit-book-action__delete"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </>
  );
};

export default EditBookAction;

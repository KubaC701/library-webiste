import Button from '../Button/Button';

const EditBookAction = () => {
  return (
    <>
      <Button type="button" className="edit-book-action__borrow">
        Mark as borrowed
      </Button>
      <Button type="button" variant="dangerous" className="edit-book-action__delete">
        Delete
      </Button>
    </>
  );
};

export default EditBookAction;

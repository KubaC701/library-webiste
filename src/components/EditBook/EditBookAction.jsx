import Button from '../Button/Button';

const EditBookAction = () => {
  return (
    <div>
      <Button type="button">Mark as borrowed</Button>
      <Button type="button" variant="dangerous" className="edit-book-action__delete">
        Delete
      </Button>
    </div>
  );
};

export default EditBookAction;

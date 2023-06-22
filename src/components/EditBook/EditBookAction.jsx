const EditBookAction = () => {
  return (
    <div className="edit-book-action_container">
      <button type="button" className="edit-book-action_borrowed">
        Mark as borrowed
      </button>
      <button type="button-delete" className="edit-book-action_delete">
        Delete
      </button>
    </div>
  );
};

export default EditBookAction;

const EditBookAction = () => {
  return (
    <main>
      <div className="edit-book-action_container">
        <button type="active" className="edit-book-action_borrowed">
          Mark as borrowed
        </button>
        <button
          type="button-delete"
          className="edit-book-action_delete"
          style={{ color: '--color-primary' }}
        >
          Delete
        </button>
      </div>
    </main>
  );
};

export default EditBookAction;

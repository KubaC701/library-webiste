const EditBookAction = () => {
  return (
    <main>
      <div className="editbookaction_container">
        <button type="active" className="editbookaction_borrowed">
          Mark as borrowed
        </button>
        <button type="active" className="editbookaction_delete" style={{ color: '#e3893e' }}>
          Delete
        </button>
      </div>
    </main>
  );
};

export default EditBookAction;

const BookAction = () => {
  return (
    <main>
      <div className="bookaction_container">
        <button type="active" className="bookedition_borrowed">
          Mark as borrowed
        </button>
        <button type="active" className="bookedition_delete" style={{ color: '#e3893e' }}>
          Delete
        </button>
      </div>
    </main>
  );
};

export default BookAction;

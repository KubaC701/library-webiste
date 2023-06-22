const EditBookHistory = () => {
  return (
    <div className="edit-book-history_container">
      <div>
        <h2 className="edit-book-history_h2">History</h2>
      </div>
      <div className="edit-book-history_info">
        <ul className="edit-book-history_dates">
          <li> 12-03-2023 </li> <br />
          <li> 22-03-2023 </li> <br />
          <li> 08-05-2023 </li> <br />
          <li> 17-06-2023 </li> <br />
          <li> 28-06-2023 </li> <br />
        </ul>
        <ul className="edit-book-history_names">
          <li> Joe borrowed a book</li> <br />
          <li> Joe returned a book</li> <br />
          <li> Alice borrowed a book</li> <br />
          <li> Alice returned a book</li> <br />
          <li> Rob borrowed a book</li> <br />
        </ul>
      </div>
    </div>
  );
};

export default EditBookHistory;

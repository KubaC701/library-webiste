const EditBookHistory = () => {
  return (
    <div className="edit-book-history__container">
      <div>
        <h2 className="edit-book-history__h2">History</h2>
      </div>
      <div className="edit-book-history__info">
        <ul className="edit-book-history__list">
          <li> 12-03-2023 Joe borrowed a book,</li>
          <li>22-03-2023 Joe returned a book, </li>
          <li>08-05-2023 Alice borrowed a book,</li>
          <li>17-06-2023 Alice returned a book,</li>
          <li> 28-06-2023 Rob borrowed a book </li>
        </ul>
      </div>
    </div>
  );
};

export default EditBookHistory;

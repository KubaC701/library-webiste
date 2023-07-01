const EditBookHistory = () => {
  return (
    <section className="edit-book-history__container">
      <h2 className="edit-book-history__h2">History</h2>
      <ul className="edit-book-history__list">
        <li className="edit-book-history__item">
          <span className="edit-book-history__date"> 12-03-2023</span> Joe borrowed a book
        </li>
        <li className="edit-book-history__item">
          <span className="edit-book-history__date"> 22-03-2023</span> Joe returned a book
        </li>
        <li className="edit-book-history__item">
          <span className="edit-book-history__date"> 08-05-2023</span> Alice borrowed a book
        </li>
      </ul>
    </section>
  );
};

export default EditBookHistory;

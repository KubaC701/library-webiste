import './booksearch.css';
import books from '../../data/books.json';

const BookSearch = () => {
  return (
    <main className="container">
      <div>
        <h1>logo&apos;s space</h1>
      </div>
      <input className="input" type="text" name="login" id="login" placeholder="Search" />
      <div className="tab">
        {books.map((book) => (
          <div className="item" key={`${book.title} ${book.author}`}>
            <img src={book.thumbnail} alt={book.title} className="logo frame" />
            <section>
              <h1>{book.title}</h1>
              <h2 className="middlecolor">{book.author}</h2>
            </section>
            <button type="submit" className="button">
              Reserve
            </button>
          </div>
        ))}
      </div>
      <span>
        After reservation you’ll have 3 days to pick up you book from the library after this time
        your reservation will be cancelled
      </span>
    </main>
  );
};

export default BookSearch;

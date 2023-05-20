import './booksearch.css';
import books from '../../data/books.json';

const BookSearch = () => {
  return (
   
   
   
   
   <main  className="booksearch__backgroundandscroll">







    <div className="booksearch">

      <div >
        <h1>logo&apos;s space</h1>
      </div>
      <div className="booksearch__searcher">
        <input className="booksearch__input" type="text" name="searcher" id="searcher" placeholder="Book's title" />


        <button type="submit" className="booksearch__searchbutton">
              Search
        </button>

      </div>






      <div className="booksearch__items">
        {books.map((book) => (
          <div className="booksearch__item" type="submit" key={`${book.title} ${book.author}`}>
            <div>
            <img src={book.thumbnail} alt={book.title} className="booksearch__img" />
            </div>
            <div>
              <h1>{book.title}</h1>
              <h2 className="middlecolor">{book.author}</h2>
            </div>
            <div>
            <button type="submit" className="booksearch__button">
              Reserve
            </button>
            </div>
          </div>
        ))}
      </div>
      <span>
        After reservation you’ll have 3 days to pick up you book from the library after this time
        your reservation will be cancelled
      </span>
      </div>
    </main>
  );
};

export default BookSearch;

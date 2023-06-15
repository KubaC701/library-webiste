import './booksearch.css';
import books from '../../data/books.json';

const BookSearch = () => {
  return (
   
   
   
   
   <main>







    <div className="booksearch__container">

      <div >
        <h1 className="booksearch__h1">logo&apos;s space</h1>
      </div>
      <div className="booksearch__search">
        <input className="booksearch__input" type="text" name="search" id="search" placeholder="Book's title" />


        <button type="submit" className="booksearch__search-button">
              Search
        </button>

      </div>






      <div className="booksearch__items">
        {books.map((book) => (
          <div className="booksearch__item" type="button" key={`${book.title} ${book.author}`}>
            <div>
            <img src={book.thumbnail} alt={book.title} className="booksearch__thumbnail" />
            </div>
            <div>
              <h1 className="booksearch__h1">{book.title}</h1>
              <h2 className="middlecolor booksearch__h2">{book.author}</h2>
            </div>
            <div>
            <button type="submit" className="booksearch__button">
              Reserve
            </button>
            </div>
          </div>
        ))}
      </div>
      <span className="booksearch__span">
        After reservation you’ll have 3 days to pick up you book from the library after this time
        your reservation will be cancelled
      </span>
      </div>
    </main>
  );
};

export default BookSearch;
import './usershistory.css';
import books from '../../data/books.json';

const UsersHistory = () => {
  return (
    <main className="usershistory__backgroundandscroll">
      <div className="usershistory">
        <div>
          <h1>logo&apos;s space</h1>
        </div>
        <div className="usershistory__searcher">
          <input
            className="usershistory__input"
            type="text"
            name="searcher"
            id="searcher"
            placeholder="Book's title"
          />

          <button type="submit" className="usershistory__searchbutton">
            Search
          </button>
        </div>

        <div className="usershistory__items">
          {books.map((book) => (
            <div className="usershistory__item" type="submit" key={`${book.title} ${book.author}`}>
              <div>
                <img src={book.thumbnail} alt={book.title} className="usershistory__img" />
              </div>
              <div>
                <h1>{book.title}</h1>
                <h2 className="middlecolor">{book.author}</h2>
              </div>
              <div>
                <button type="submit" className="usershistory__button">
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

export default UsersHistory;

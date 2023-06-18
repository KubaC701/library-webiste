import './history.css';
import historyData from '../../data/usershistory.json';
import useAuthContext from '../../contexts/AuthContext';
import Layout from '../Layout/Layout';
import books from '../../data/books.json';

const History = () => {
  // keep the information about logged in user
  const { user } = useAuthContext();
  const userHistory = historyData.find((historyItem) => historyItem.email === user.email);

  const booksToDisplay = userHistory.books.map((book) => {
    const matchedBook = books.find((bookData) => bookData.id === book.id);
    if (matchedBook) {
      return {
        ...book,
        ...matchedBook,
      };
    }
    return book;
  });

  return (
    <Layout className="history__container">
      <div className="history__form-wrapper">
        <section>
          <h1 className="history__user-name history__h1">John Doe</h1>
          <h2 className="history__h2">Your history</h2>
        </section>

        <div className="history__list">
          {booksToDisplay.map((book) => (
            <div className="history__item" key={book.id}>
              <div className="history_cover">
                <img src={book.thumbnail} alt={book.title} className="history__cover" />
              </div>
              <div className="history_cover">
                <div className="history__line">
                  <h3 className="history__h3">Title:</h3>
                  <p className="history__p">{book.title}</p>
                </div>
                <div className="history__line">
                  <h3 className="history__h3">Author:</h3>
                  <p className="history__p"> {book.author}</p>
                </div>
                <div className="history__line">
                  <h3 className="history__h3">From:</h3>
                  <p className="history__p">{book.from}</p>
                </div>
                <div className="history__line">
                  <h3 className="history__h3">To:</h3>
                  <p className="history__p">{book.to}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default History;

import './history.css';
import Layout from '../Layout/Layout';

const History = () => {
  return (
    <Layout className="history__container">
      <div className="history__form-wrapper">
        <section>
          <h1 className="history__user-name history__h1">John Doe</h1>
          <h2 className="history__h2">Your history</h2>
        </section>

        <div className="history__item">
          <div className="history_cover">
            <img src="/book0001.jpg" alt="był sobie gdańsk" className="history__cover" />
          </div>
          <div className="history_cover">
            <h3 className="history__h3">Title:</h3>
            <h3 className="history__h3">Author:</h3>
            <h3 className="history__h3">From:</h3>
            <h3 className="history__h3">To:</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;

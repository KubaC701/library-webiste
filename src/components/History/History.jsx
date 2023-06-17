import './history.css';
import usershistory from '../../data/usershistory.json';
import Layout from '../Layout/Layout';

const History = () => {
  return (
    <Layout className="history__container">
      <div className="history__form-wrapper">
        <section>
          <h1 className="history__user-name history__h1">John Doe</h1>
          <h2 className="history__h2">Your history</h2>
        </section>

        <div className="history__list">
          {usershistory.map((borrowed) => (
            <div className="history__item" key={`${borrowed.from} ${borrowed.to} ${borrowed.to}`}>
              <div className="history_cover">
                <img src={borrowed.mail} alt={borrowed.from} className="history__cover" />
              </div>
              <div className="history_cover">
                <div className="history__line">
                  <h3 className="history__h3">Title:</h3>
                  <p className="history__p">{borrowed.to}</p>
                </div>
                <div className="history__line">
                  <h3 className="history__h3">Author:</h3>
                  <p className="history__p"> {borrowed.mail}</p>
                </div>
                <div className="history__line">
                  <h3 className="history__h3">From:</h3>
                </div>
                <div className="history__line">
                  <h3 className="history__h3">To:</h3>
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

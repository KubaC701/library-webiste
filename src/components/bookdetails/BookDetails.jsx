import './bookdetails.css';
import Layout from '../Layout/Layout';

const BookDetails = () => {
  return (
    <Layout className="book-details">
      <div className="form-wrapper">
        <section>
          <h1 className="book-details__title">Był sobie Gdańsk</h1>
          <h2 className="book-details__author">Wojciech Duda, Grzegorz Fortuna, Donald Tusk</h2>
        </section>
        <img src="/book0001.jpg" alt="był sobie gdańsk" className="book-details__cover" />
        <button type="submit" className="button">
          Reserve
        </button>
        <span className="book-details__reservation">
          {' '}
          After reservation you’ll have 3 days to pick up you book from the library after this time
          your reservation will be cancelled
        </span>
        <h2 className="book-details__subheading">Description</h2>
        <p className="book-details__description">
          Na album &quot;Był sobie Gdańsk&quot; złożyły się zdjęcia z wielu zbiorów archiwalnych,
          muzealnych i prywatnych. Przejrzeliśmy ich tysiące. Naszym zamiarem było pokazanie przede
          wszystkim tych fragmentów miasta, które zniknęły bezpowrotnie lub zmieniły swój charakter.
        </p>
      </div>
    </Layout>
  );
};

export default BookDetails;

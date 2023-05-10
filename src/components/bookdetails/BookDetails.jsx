import './bookdetails.css';

const BookDetails = () => {
  return (
    <main className="container">
      <div className="form-wrapper">
        <section>
          <h1>Był sobie Gdańsk</h1>
          <h2 className="middlecolor">Wojciech Duda, Grzegorz Fortuna, Donald Tusk</h2>
        </section>
        <img src="/book0001.jpg" alt="był sobie gdańsk" className="logo frame" />
        <button type="submit" className="button">
          Reserve
        </button>
        <span>
          {' '}
          After reservation you’ll have 3 days to pick up you book from the library after this time
          your reservation will be cancelled
        </span>
        <h2>Description</h2>
        <div className="divdescription">
          <p>
            Na album &quot;Był sobie Gdańsk&quot; złożyły się zdjęcia z wielu zbiorów archiwalnych,
            muzealnych i prywatnych. Przejrzeliśmy ich tysiące. Naszym zamiarem było pokazanie
            przede wszystkim tych fragmentów miasta, które zniknęły bezpowrotnie lub zmieniły swój
            charakter.
          </p>
        </div>
      </div>
    </main>
  );
};

export default BookDetails;

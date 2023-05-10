import "./booksearch.css";

const BookSearch = () => {
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submit");
    };
  
    return (
    <main className="container">

      <div><h1>logo's space</h1></div>
      <input
        className="input"
        type="text"
        name="login"
        id="login"
        placeholder="Search"
        />

      <div className="tab">

        <div className="item">
          <img src="/book0001.jpg" alt="był sobie gdańsk" className="logo frame"/>
          <section>
            <h1>Był sobie Gdańsk</h1>
            <h2 className="middlecolor">Wojciech Duda, Grzegorz Fortuna, Donald Tusk</h2>
          </section>
          <button type="submit" className="button">Reserve</button> 
        </div>

        <div className="item">
          <img src="/book0001.jpg" alt="był sobie gdańsk" className="logo frame"/>
          <section>
            <h1>Był sobie Gdańsk</h1>
            <h2 className="middlecolor">Wojciech Duda, Grzegorz Fortuna, Donald Tusk</h2>
          </section>
          <button type="submit" className="button">Reserve</button> 
        </div>

        <div className="item">
          <img src="/book0001.jpg" alt="był sobie gdańsk" className="logo frame"/>
          <section>
            <h1>Był sobie Gdańsk</h1>
            <h2 className="middlecolor">Wojciech Duda, Grzegorz Fortuna, Donald Tusk</h2>
          </section>
          <button type="submit" className="button">Reserve</button> 
        </div>

        <div className="item">
          <img src="/book0001.jpg" alt="był sobie gdańsk" className="logo frame"/>
          <section>
            <h1>Był sobie Gdańsk</h1>
            <h2 className="middlecolor">Wojciech Duda, Grzegorz Fortuna, Donald Tusk</h2>
          </section>
          <button type="submit" className="button">Reserve</button> 
        </div>

        <div className="item">
          <img src="/book0001.jpg" alt="był sobie gdańsk" className="logo frame"/>
          <section>
            <h1>Był sobie Gdańsk</h1>
            <h2 className="middlecolor">Wojciech Duda, Grzegorz Fortuna, Donald Tusk</h2>
          </section>
          <button type="submit" className="button">Reserve</button> 
        </div>


        <div className="item">
          <img src="/book0001.jpg" alt="był sobie gdańsk" className="logo frame"/>
          <section>
            <h1>Był sobie Gdańsk</h1>
            <h2 className="middlecolor">Wojciech Duda, Grzegorz Fortuna, Donald Tusk</h2>
          </section>
          <button type="submit" className="button">Reserve</button> 
        </div>



        </div>
          
        <span>  After reservation you’ll have 3 days to pick up you book from the library after this time your reservation will be cancelled</span>
      
    </main>










  );
  };

export default BookSearch;
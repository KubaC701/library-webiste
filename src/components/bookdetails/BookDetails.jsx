import "./bookdetails.css";

const BookDetails = () => {
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submit");
    };
  
    return (
    <main className="container">

  

            <div className="divbook">



            <section>
            <h1>Był sobie Gdańsk</h1>
            <h2>Wojciech Duda, Grzegorz Fortuna, Donald Tusk</h2>
            </section>




            <img
                  src="/book0001.jpg"
                  alt="był sobie gdańsk"
                  className="logo"
                />

            
          
          
            <div className="form-wrapper">



            <form onSubmit={handleSubmit} className="form">
         

            <button type="submit" className="button">Reserve</button>
         
            <span className="shortinfo">  After reservation you’ll have 3 days to pick up you book from the library after this time your reservation will be cancelled</span>
         
       <h3>Description</h3> 
            <div>
            <p>Na album "Był sobie Gdańsk" złożyły się zdjęcia z wielu zbiorów archiwalnych, muzealnych i prywatnych. Przejrzeliśmy ich tysiące. Naszym zamiarem było pokazanie przede wszystkim tych fragmentów miasta, które zniknęły bezpowrotnie lub zmieniły swój charakter.
            </p>
            </div>

          </form>
            </div>

   

      </div>
    </main>
  );
  };

export default BookDetails;



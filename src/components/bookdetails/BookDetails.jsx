import "./bookdetails.css";

const BookDetails = () => {

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submit");
    };
  
    return 
    (
    <main className="container">
      <div className="background-wrapper--desktop">
        <img
          src="/background.png"
          alt=""
          className="background--desktop"
        />
      </div>
      <div className="form-wrapper">
 
            <button type="subscribe" className="button">
              Subscribe
            </button>
      </div>
    </main>
  );
  }

export default BookDetails;



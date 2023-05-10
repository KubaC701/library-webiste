import './login.css';

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <main className="container">
      <div className="background-wrapper--desktop">
        <img src="/background.png" alt="" className="background--desktop" />
      </div>
      <div className="form-wrapper">
        <div>
          <img src="/logo.png" alt="Logo Motigu" className="logo" />
          <h1 className="title">Motigu</h1>
          <form onSubmit={handleSubmit} className="form">
            <label className="label" htmlFor="login">
              Login
            </label>
            <input className="input input-login" type="text" name="login" id="login" />
            <label className="label" htmlFor="password">
              Password
            </label>
            <input className="input" type="password" name="password" id="password" />
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../contexts/AuthContext';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isLoginError, setIsLoginError] = useState(false);
  const { signIn } = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { login, password } = event.target.elements;
    const isValidUser = signIn({ login: login.value, password: password.value });

    if (isValidUser) {
      navigate('/', { replace: true });
    } else {
      setIsLoginError(true);

      setTimeout(() => {
        setIsLoginError(false);
      }, 5000);
    }
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
      {isLoginError && <div className="toast">Login or password is incorrect</div>}
    </main>
  );
};

export default Login;

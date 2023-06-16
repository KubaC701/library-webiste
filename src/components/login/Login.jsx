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

    const { email, password } = event.target.elements;
    const isValidUser = signIn({ email: email.value, password: password.value });

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
    <main className="login">
      <div className="login__background-wrapper--desktop">
        <img src="/background.png" alt="" className="login__background--desktop" />
      </div>
      <div className="login__form-wrapper">
        <div>
          <img src="/logo.png" alt="Logo Motigu" className="login__logo" />
          <h1 className="login__title">Motigu</h1>
          <form onSubmit={handleSubmit} className="login__form">
            <label className="login__label" htmlFor="email">
              Email
            </label>
            <input className="login__input input-login" type="text" name="email" id="email" />
            <label className="login__label" htmlFor="password">
              Password
            </label>
            <input className="login__input" type="password" name="password" id="password" />
            <button type="submit" className="login__button">
              Login
            </button>
          </form>
        </div>
      </div>
      {isLoginError && <div className="login__toast">Login or password is incorrect</div>}
    </main>
  );
};

export default Login;

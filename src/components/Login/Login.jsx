import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../contexts/AuthContext';
import './login.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Login = () => {
  const navigate = useNavigate();
  const [isLoginError, setIsLoginError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const { signIn } = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    let isFilled = true;
    if (email.value === '') {
      setIsEmailError(true);
      isFilled = false;
    }
    if (password.value === '') {
      setIsPasswordError(true);
      isFilled = false;
    }
    if (!isFilled) return;

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
            <Input
              className="login__input login__input--email"
              type="text"
              name="email"
              id="email"
              label="Email"
              error={isEmailError && 'Email is required'}
              onChange={() => setIsEmailError(false)}
            />
            <Input
              className="login__input"
              type="password"
              name="password"
              id="password"
              label="Password"
              error={isPasswordError && 'Password is required'}
              onChange={() => setIsPasswordError(false)}
            />
            <Button type="submit" className="login__button" size="big">
              Login
            </Button>
          </form>
        </div>
      </div>
      {isLoginError && <div className="login__toast">Login or password is incorrect</div>}
    </main>
  );
};

export default Login;

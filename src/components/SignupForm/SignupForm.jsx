import { useState } from 'react';
import Button from 'components/Button/Button';
import './SignupForm.scss';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

export default function SignupForm() {
  const [login, setLogin] = useState(INITIAL_STATE.login);
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.password);

  const inputChangeHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'login':
        setLogin(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    console.log('reg');

    setLogin(INITIAL_STATE.login);
    setEmail(INITIAL_STATE.email);
    setPassword(INITIAL_STATE.password);
  };

  return (
    <>
      <form className="SignupForm" onSubmit={submitHandler}>
        <label>
          <span>Login</span>
          <input
            type="text"
            name="login"
            value={login}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name can only include letters, apostrophes, dashes, and spaces."
            required
            onChange={inputChangeHandler}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            title="Type in valid email."
            required
            onChange={inputChangeHandler}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            title="Password"
            required
            onChange={inputChangeHandler}
          />
        </label>

        <Button text="Sign Up" />
      </form>
    </>
  );
}

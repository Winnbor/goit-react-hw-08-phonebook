import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLoggedIn } from 'redux/operations';
import Button from 'components/Button/Button';
import './LoginForm.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.password);

  const dispatch = useDispatch();

  const inputChangeHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
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

    console.log('log');
    dispatch(getLoggedIn({ email, password }));

    setEmail(INITIAL_STATE.email);
    setPassword(INITIAL_STATE.password);
  };
  return (
    <>
      <form className="LoginForm" onSubmit={submitHandler}>
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
        <Button text="Log In" />
      </form>
    </>
  );
}

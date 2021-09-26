import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRegistered } from 'redux/operations';
import Button from 'components/Button/Button';
import './SignupForm.scss';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export default function SignupForm() {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.password);

  const dispatch = useDispatch();

  const inputChangeHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
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
    dispatch(getRegistered({ name, email, password }));

    setName(INITIAL_STATE.name);
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
            name="name"
            value={name}
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

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/operations';
import { getItems } from 'redux/selectors';
import Button from 'components/Button/Button';
import './ContactForm.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

function ContactForm() {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);

  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const inputChangeHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const double = items.find(
      ({ name }) => name.toLowerCase() === normalizedName,
    );

    if (double) {
      window.alert(`${double.name} is already in contacts.`);
    } else {
      dispatch(contactsOperations.postContact({ name, number }));
    }

    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
  };

  return (
    <form className="ContactForm" onSubmit={submitHandler}>
      <label>
        <span>Name</span>
        <input
          className="ContactForm__input"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name can only include letters, apostrophes, dashes, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan and so on"
          required
          onChange={inputChangeHandler}
        />
      </label>
      <label>
        <span>Phone</span>
        <input
          className="ContactForm__input"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChangeHandler}
        />
      </label>
      <Button text="Add" />
    </form>
  );
}

export default ContactForm;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/operations';

export default function ContactListItem({ id, name, number }) {
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const [isEdited, setIsEdited] = useState(false);
  const dispatch = useDispatch();

  const inputChangeHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setNewName(value);
        break;
      case 'number':
        setNewNumber(value);
        break;

      default:
        break;
    }
  };

  const openEditor = () => {
    setIsEdited(!isEdited);
  };

  const handleOnSave = e => {
    e.preventDefault();

    dispatch(contactsOperations.editContact({ id, newName, newNumber }));

    setIsEdited(!isEdited);
  };

  return (
    <>
      {isEdited ? (
        <div className="Contact__holder">
          <form
            className="ContactForm ContactForm--editor"
            onSubmit={handleOnSave}
          >
            <label>
              <span className="visually-hidden">Name</span>
              <input
                className="ContactForm__input--editor"
                type="text"
                name="name"
                value={newName}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name can only include letters, apostrophes, dashes, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan and so on"
                required
                onChange={inputChangeHandler}
              />
            </label>
            <label>
              <span className="visually-hidden">Phone</span>
              <input
                className="ContactForm__input--editor"
                type="tel"
                name="number"
                value={newNumber}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={inputChangeHandler}
              />
            </label>
            <button className="Contact__btn Contact__btn--edit" type="submit">
              V
            </button>
          </form>
          <button className="Contact__btn" type="button" onClick={openEditor}>
            Back
          </button>
        </div>
      ) : (
        <div className="Contact__holder">
          <span className="Contact__name">{name}:</span>
          <span>{number}</span>
          <button
            className="Contact__btn Contact__btn--edit"
            type="button"
            onClick={openEditor}
          >
            Edit
          </button>
          <button
            className="Contact__btn"
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            X
          </button>
        </div>
      )}
    </>
  );
}

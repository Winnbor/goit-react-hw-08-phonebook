import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/operations';
import { getFilteredContacts } from '../../redux/selectors';
import './ContactList.scss';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  return (
    <>
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <ul className="ContactList">
          {contacts.map(({ id, name, number }) => (
            <li key={id} className="ContactList__item">
              <span className="ContactList__name">{name}:</span>
              <span>{number}</span>
              <button
                className="ContactList__btn"
                type="button"
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactList;

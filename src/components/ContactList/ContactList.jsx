import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import './ContactList.scss';
import ContactListItem from './ContactListItem';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  return (
    <>
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <ul className="ContactList">
          {contacts.map(({ id, name, number }) => (
            <li key={id} className="ContactList__item">
              <ContactListItem id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;

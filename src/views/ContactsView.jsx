import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/operations';
import Container from 'components/Container/Container.jsx';
import ContactForm from 'components/ContactForm/ContactForm.jsx';
import ContactList from 'components/ContactList/ContactList.jsx';
import Filter from 'components/Filter/Filter.jsx';

function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h2>Add new contact</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}

export default ContactsView;

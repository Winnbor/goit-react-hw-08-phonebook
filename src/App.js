import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/operations';
import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h2>Add new contact</h2>
        <ContactForm />
        <h1>Contacts</h1>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}

export default App;

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

/* Authorization */

export async function getRegistered({ name, email, password }) {
  const { data } = await axios.post('/users/signup', {
    name,
    email,
    password,
  });
  return data;
}

export async function getLoggedIn({ email, password }) {
  const { data } = await axios.post('/users/login', {
    email,
    password,
  });
  return data;
}

/* Contacts */

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postContact({ name, number }) {
  const { data } = await axios.post('/contacts', {
    name,
    number,
  });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

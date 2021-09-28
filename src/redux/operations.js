import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';
import { toast } from 'react-toastify';

/* Authorization operations */

export const getRegistered = createAsyncThunk(
  'auth/getRegistered',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.getRegistered({ name, email, password });
      contactsAPI.setToken(data.token);
      toast.success(`Hello, ${name}, you are successfully registered`);
      return data;
    } catch (error) {
      toast.error(error.message);

      return rejectWithValue(error.message);
    }
  },
);

export const getLoggedIn = createAsyncThunk(
  'auth/getLoggedIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.getLoggedIn({ email, password });
      contactsAPI.setToken(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);

      return rejectWithValue(error.message);
    }
  },
);

export const getLoggedOut = createAsyncThunk(
  'auth/getLoggedOut',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.getLoggedOut();
      contactsAPI.unsetToken(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);

      return rejectWithValue(error.message);
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      toast('🦄 Log in or Sign up, please');

      return rejectWithValue();
    }

    contactsAPI.setToken(persistedToken);

    try {
      const data = await contactsAPI.getCurrentUser();
      return data;
    } catch (error) {
      toast('🦄 Log in or Sign up, please');

      return rejectWithValue(error.message);
    }
  },
);

/* Contacts operations */

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken !== null) {
      try {
        const contacts = await contactsAPI.fetchContacts();
        return contacts;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.postContact({ name, number });
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.deleteContact(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, newName, newNumber }, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.editContact({
        id,
        newName,
        newNumber,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

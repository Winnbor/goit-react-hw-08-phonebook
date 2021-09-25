import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

/* Authorization operations */

export const getRegistered = createAsyncThunk(
  'users/getRegistered',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await contactsAPI.getRegistered();
      contactsAPI.setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getLoggedIn = createAsyncThunk(
  'users/getLoggedIn',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await contactsAPI.getLoggedIn();
      contactsAPI.setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

/* Contacts operations */

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
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

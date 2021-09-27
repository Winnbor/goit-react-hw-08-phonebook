import { combineReducers } from 'redux';
import { createReducer, createSlice } from '@reduxjs/toolkit';
import {
  getRegistered,
  getLoggedIn,
  getLoggedOut,
  getCurrentUser,
  fetchContacts,
  postContact,
  deleteContact,
  editContact,
} from './operations';
import { changeFilter } from './actions';

/* Auth reducer */

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [getRegistered.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [getLoggedIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [getLoggedOut.fulfilled](state, _) {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending](state, _) {
      state.isFetchingUser = true;
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [getCurrentUser.rejected](state, _) {
      state.isFetchingUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;

/* Contacts reducer */

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [postContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.meta.arg),
  [editContact.fulfilled]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [postContact.pending]: () => true,
  [postContact.fulfilled]: () => false,
  [postContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [editContact.pending]: () => true,
  [editContact.fulfilled]: () => false,
  [editContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [postContact.rejected]: (_, { payload }) => payload,
  [postContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
  [editContact.rejected]: (_, { payload }) => payload,
  [editContact.pending]: () => null,
});

export const contactsReducer = combineReducers({
  items,
  filter,
  isLoading,
  error,
});

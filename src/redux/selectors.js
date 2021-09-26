import { createSelector } from '@reduxjs/toolkit';

const getUserName = state => state.auth.user.name;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsFetchingUser = state => state.auth.isFetchingUser;

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export {
  getUserName,
  getIsLoggedIn,
  getIsFetchingUser,
  getItems,
  getFilter,
  getFilteredContacts,
};

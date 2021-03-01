import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const contactsSelectors = {
  getAllContacts,
  getFilter,
  getFilteredContacts,
};
export default contactsSelectors;

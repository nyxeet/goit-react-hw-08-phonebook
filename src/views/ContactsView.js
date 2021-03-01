import React from 'react';
import ContactsEditor from '../components/ContactsEditor';
import ContactsFilter from '../components/ContactsFilter';
import ContactsList from '../components/ContactsList';

const HomeView = () => (
  <div>
    <h1>Phonebook</h1>
    <ContactsEditor />
    <h2>Contacts</h2>
    <ContactsFilter />
    <ContactsList />
  </div>
);

export default HomeView;

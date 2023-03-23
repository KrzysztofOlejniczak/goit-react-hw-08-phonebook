import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const loadFromLocalStorage = () => {
    try {
      const dataFromLocal = localStorage.getItem('phonebook');
      const parsedDataFromLocal = JSON.parse(dataFromLocal);
      if (parsedDataFromLocal !== null) {
        return parsedDataFromLocal;
      }
      return [];
    } catch (error) {
      return [];
    }
  };

  const [contacts, setContacts] = useState(loadFromLocalStorage());
  const [filter, setFilter] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().replace(/\s/g, '') ===
          name.toLowerCase().replace(/\s/g, '')
      )
    ) {
      alert(`${name.toUpperCase()} is already in contacts!`);
      return;
    }
    setContacts([...contacts, { id: nanoid(), name, number }]);
    form.reset();
  };

  const handleFilter = e => {
    const form = e.currentTarget;
    const filterValue = form.elements.filter.value;
    setFilter(filterValue);
  };

  const handleDelete = id => {
    const index = contacts.findIndex(contact => contact.id === id);
    contacts.splice(index, 1);
    setContacts([...contacts]);
  };

  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        margin: '0 auto',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        fontSize: 20,
      }}
    >
      <h1
        style={{
          fontWeight: 500,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        Phonebook
      </h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2
        style={{
          fontWeight: 500,
        }}
      >
        Contacts
      </h2>
      <Filter handleFilter={handleFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDelete={handleDelete}
      />
    </div>
  );
};

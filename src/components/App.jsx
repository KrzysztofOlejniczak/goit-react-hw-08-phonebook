import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
// import { addContact, deleteContact } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operation';
import { Spinner } from './Spinner/Spinner';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const handleFilter = e => {
    const form = e.currentTarget;
    const filterValue = form.elements.filter.value;
    dispatch(setFilter(filterValue));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

      {isLoading && !error && <Spinner />}

      <ContactForm />

      <h2
        style={{
          fontWeight: 500,
        }}
      >
        Contacts
      </h2>
      <Filter handleFilter={handleFilter} />
      <ContactList contacts={contacts} filter={filter} />
    </div>
  );
};

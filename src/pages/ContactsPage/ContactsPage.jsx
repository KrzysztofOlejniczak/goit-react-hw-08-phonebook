import { useEffect } from 'react';
// import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
// import { addContact, deleteContact } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operation';
import { Spinner } from 'components/Spinner/Spinner';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Spinner />}

      {/* <ContactForm /> */}

      <Filter />
      <ContactList contacts={contacts} filter={filter} />
    </>
  );
};

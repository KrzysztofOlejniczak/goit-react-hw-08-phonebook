import { useEffect } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectModalId,
  selectModalOpen,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operation';
import { Box, Modal } from '@mui/material';
import { closeModal } from 'redux/contacts/modalSlice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Helmet } from 'react-helmet-async';
import { EditForm } from 'components/EditForm/EditForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const modalOpen = useSelector(selectModalOpen);
  const modalId = useSelector(selectModalId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Helmet>
        <title>PhoneBook Contacts</title>
      </Helmet>
      <Filter />
      <ContactList contacts={contacts} filter={filter} />
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!!modalId ? <EditForm id={modalId} /> : <ContactForm />}
        </Box>
      </Modal>
    </>
  );
};

export default ContactsPage;

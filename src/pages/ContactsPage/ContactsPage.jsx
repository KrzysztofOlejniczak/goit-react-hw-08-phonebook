import { useEffect } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectModal } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { Box, Modal } from '@mui/material';
import { closeModal } from 'redux/modalSlice';
import { ContactForm } from 'components/ContactForm/ContactForm';

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

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const modalOpen = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Filter />
      <ContactList contacts={contacts} filter={filter} />
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactForm />
        </Box>
      </Modal>
    </>
  );
};

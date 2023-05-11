import { Box, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display={'flex'}
      flexDirection={'column'}
    >
      <TextField
        required
        margin="normal"
        id="name"
        label="Name"
        name="name"
        type="text"
      />
      <TextField
        required
        margin="normal"
        id="phone"
        label="Phone number"
        name="number"
        type="tel"
      />
      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        Add contact
      </Button>
    </Box>

    //         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"

    //         pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
    //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  );
};

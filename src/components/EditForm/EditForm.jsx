import { Box, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';

export const EditForm = ({ id = null }) => {
  const [errorName, setErrorName] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const validateInputName = input => {
    const nameRegex =
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(([' -][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ])?[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*)*$/;
    if (!nameRegex.test(input)) {
      return 'Name may contain only letters, apostrophe, dash and spaces.';
    }
    return undefined;
  };

  const handleInputChangeName = event => {
    const inputValue = event.target.value;
    setName(inputValue);
    setErrorName(validateInputName(inputValue.trim()));
  };

  const validateInputPhone = input => {
    const phoneRegex =
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    if (!phoneRegex.test(input)) {
      return 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
    }
    return undefined;
  };

  const handleInputChangePhone = event => {
    const inputValue = event.target.value;
    setPhone(inputValue);
    setErrorPhone(validateInputPhone(inputValue));
  };

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;
    dispatch(updateContact({ contactId: id, name, number }));
    form.reset();
  };

  const idContact = contacts.find(el => el.id === id);

  useEffect(() => {
    setName(idContact.name);
    setPhone(idContact.number);
  }, [idContact]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display={'flex'}
      flexDirection={'column'}
    >
      <TextField
        value={name}
        required
        margin="normal"
        id="name"
        label="Name"
        name="name"
        type="text"
        error={!!errorName}
        helperText={errorName}
        onChange={handleInputChangeName}
      />
      <TextField
        value={phone}
        required
        margin="normal"
        id="phone"
        label="Phone number"
        name="number"
        type="tel"
        error={!!errorPhone}
        helperText={errorPhone}
        onChange={handleInputChangePhone}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 2 }}
        disabled={!!errorName || !!errorPhone}
      >
        Edit contact
      </Button>
    </Box>
  );
};

import { Box, Button, TextField } from '@mui/material';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const [errorName, setErrorName] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

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
    setErrorName(validateInputName(inputValue));
  };
  // eslint-disable-next-line
  const debouncedHandleInputChangeName = useCallback(
    debounce(e => handleInputChangeName(e), 200),
    []
  );

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
    setErrorPhone(validateInputPhone(inputValue));
  };
  // eslint-disable-next-line
  const debouncedHandleInputChangePhone = useCallback(
    debounce(e => handleInputChangePhone(e), 200),
    []
  );

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().replace(/\s/g, '') ===
          name.toLowerCase().replace(/\s/g, '')
      )
    ) {
      toast(`${name} is already in contacts!`, {
        icon: '⚠️',
      });
      return;
    }

    if (
      contacts.find(
        contact =>
          contact.number.replace(/\s/g, '') === number.replace(/\s/g, '')
      )
    ) {
      const index = contacts.findIndex(
        contact =>
          contact.number.replace(/\s/g, '') === number.replace(/\s/g, '')
      );
      toast(`${number} is already in contacts! (${contacts[index].name})`, {
        icon: '⚠️',
      });
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
        error={!!errorName}
        helperText={errorName}
        onChange={debouncedHandleInputChangeName}
      />
      <TextField
        required
        margin="normal"
        id="phone"
        label="Phone number"
        name="number"
        type="tel"
        error={!!errorPhone}
        helperText={errorPhone}
        onChange={debouncedHandleInputChangePhone}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 2 }}
        disabled={!!errorName || !!errorPhone}
      >
        Add contact
      </Button>
    </Box>
  );
};

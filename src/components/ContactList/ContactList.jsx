import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { openModal } from 'redux/contacts/modalSlice';

export const ContactList = ({ filter, contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleEdit = id => {
    dispatch(openModal(id));
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name[0].toUpperCase()}`,
    };
  }

  const filteredContacts = contacts.filter(el => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <>
      {!filteredContacts.length ? (
        <Typography align="center" sx={{ mt: 2 }}>
          No contact found.
        </Typography>
      ) : (
        <List>
          {filteredContacts.map(el => (
            <ListItem
              key={el.id}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => {
                      handleEdit(el.id);
                    }}
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      handleDelete(el.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar {...stringAvatar(el.name)} />
              </ListItemAvatar>
              <ListItemText primary={el.name} secondary={el.number} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
};

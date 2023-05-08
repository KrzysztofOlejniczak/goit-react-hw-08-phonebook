import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

export const ContactList = ({ filter, contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={styles.list}>
      {contacts
        .filter(el => {
          return el.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map(el => (
          <li key={el.id} className={styles.item}>
            {el.name}: {el.phone}{' '}
            <div onClick={() => handleDelete(el.id)} className={styles.btn}>
              <DeleteTwoToneIcon />
            </div>
          </li>
        ))}
    </ul>
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

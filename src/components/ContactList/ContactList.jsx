import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = ({ handleDelete, filter, contacts }) => {
  return (
    <ul className={styles.list}>
      {contacts
        .filter(el => {
          return el.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map(el => (
          <li key={el.id} className={styles.item}>
            {el.name}: {el.number}{' '}
            <button
              onClick={() => handleDelete(el.id)}
              type="button"
              className={styles.btn}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
};

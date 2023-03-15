import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export class ContactList extends Component {
  static propTypes = {
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

  render() {
    const { contacts, filter, handleDelete } = this.props;
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
  }
}

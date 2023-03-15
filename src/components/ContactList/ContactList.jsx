import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  state = {
    contacts: '',
    filter: '',
  };

  static propTypes = {
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
      <ul>
        {contacts
          .filter(el => {
            return el.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map(el => (
            <li key={el.id}>
              {el.name}: {el.number}{' '}
              <button onClick={() => handleDelete(el.id)} type="button">
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}

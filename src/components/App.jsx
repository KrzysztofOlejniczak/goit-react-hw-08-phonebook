import { nanoid } from 'nanoid';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  // state = {
  //   contacts: [],
  //   name: '',
  //   number: '',
  //   filter: '',
  // };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string,
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      }).isRequired
    ),
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.setState(state => {
      return {
        contacts: [...this.state.contacts, { id: nanoid(), name, number }],
      };
    });
    form.reset();
  };

  handleFilter = e => {
    const form = e.currentTarget;
    const filter = form.elements.filter.value;
    this.setState(state => {
      return {
        filter: filter,
      };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h4>Contacts</h4>
        <form onChange={this.handleFilter}>
          <input
            type="text"
            name="filter"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </form>
        <ul>
          {this.state.contacts
            .filter(el => {
              return el.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase());
            })
            .map(el => (
              <li key={el.id}>
                {el.name}: {el.number}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

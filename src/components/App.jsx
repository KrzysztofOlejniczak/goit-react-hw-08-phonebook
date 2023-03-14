import { nanoid } from 'nanoid';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string,
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
        <ul>
          {this.state.contacts.map(el => (
            <li key={el.id}>
              {el.name}: {el.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

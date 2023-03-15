import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  position: 'center-top',
});

export class App extends Component {
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
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLowerCase().replace(/\s/g, '') ===
          name.toLowerCase().replace(/\s/g, '')
      )
    ) {
      Notify.failure(`${name.toUpperCase()} is already in contacts!`);
      return;
    }
    Notify.success(`${name.toUpperCase()} added to contact list.`);
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
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

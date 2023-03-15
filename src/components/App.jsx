import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
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
      alert(`${name.toUpperCase()} is already in contacts!`);
      return;
    }
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

  handleDelete = id => {
    const { contacts } = this.state;
    const index = contacts.findIndex(contact => contact.id === id);

    contacts.splice(index, 1);
    this.setState(state => {
      return {
        contacts,
      };
    });
  };

  render() {
    return (
      <div
        style={{
          margin: '0 auto',
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          fontSize: 20,
        }}
      >
        <h1
          style={{
            fontWeight: 500,
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          Phonebook
        </h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2
          style={{
            fontWeight: 500,
          }}
        >
          Contacts
        </h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

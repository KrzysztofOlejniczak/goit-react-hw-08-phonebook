import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  state = {
    filter: '',
  };

  static propTypes = {
    handleFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };

  render() {
    const { handleFilter } = this.props;
    return (
      <form onChange={handleFilter}>
        <input
          type="text"
          name="filter"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </form>
    );
  }
}

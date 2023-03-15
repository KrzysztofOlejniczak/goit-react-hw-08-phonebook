import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export class Filter extends Component {
  static propTypes = {
    handleFilter: PropTypes.func.isRequired,
  };

  render() {
    const { handleFilter } = this.props;
    return (
      <form onChange={handleFilter} className={styles.form}>
        <label className={styles.formItem}>
          Find contacts by name
          <input
            className={styles.formInput}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
      </form>
    );
  }
}

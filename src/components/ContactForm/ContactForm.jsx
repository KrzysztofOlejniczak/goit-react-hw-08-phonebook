import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export const ContactForm = ({ handleSubmit }) => {
  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formItem}>
          Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.formItem}>
          Number
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

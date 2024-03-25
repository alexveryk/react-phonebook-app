import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  render() {
    const { handleSubmit, handleChange } = this.props;
    return (
      <div className={styles.contactFormContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            className={styles.contactForm__input}
            type="text"
            name="name"
            onChange={handleChange}
            required
            placeholder="Enter name"
          />
          <input
            className={styles.contactForm__input}
            type="tel"
            name="number"
            onChange={handleChange}
            required
            placeholder="Enter number"
            pattern="\d*"
          />
          <button type="submit" className={styles.contactForm__btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <>
        <ul className={styles.contactList}>
          {contacts().map(contact => (
            <li key={contact.id} className={styles.contactList__item}>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
              <button
                type="button"
                onClick={() => deleteContact(contact.id)}
                className={styles.contactList__btn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

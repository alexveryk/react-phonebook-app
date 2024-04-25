import { Component } from 'react';
import styles from './App.module.css';
import { nanoid } from 'nanoid';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  };

  componentDidMount() {
    const contactsData = localStorage.getItem('contacts');
    const parsedContactsData = JSON.parse(contactsData);

    this.setState({ contacts: parsedContactsData });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      const contactsJSON = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', contactsJSON);
    }
  }

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        name: '',
      };
    });
    form.reset();
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  render() {
    return (
      <div className={styles.app__container}>
        <h1 className={styles.app__header}> Phonebook </h1>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div className={styles.app__contactContainer}>
          <h2 className={styles.app__header}>Contacts</h2>
          <Filter handleChange={this.handleChange} />
          <ContactList
            contacts={this.filterContacts}
            handleChange={this.handleChange}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

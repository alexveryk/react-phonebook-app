import { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import { Contacts } from "./components/Contacts/Contacts";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: "",
    filter: "",
  };

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        name: "",
      };
    });
    form.reset();
  };


  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    return (
      <>
        <h1> Phonebook </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            required
            placeholder="Enter name"
          />
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            required
            placeholder="Enter number"
            pattern="\d*"
          />
          <button type="submit"> Add contact</button>
        </form>
        <Contacts handleChange={this.handleChange} contacts={this.filterContacts}/>
      </>
    );
  }
}
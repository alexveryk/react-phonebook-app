import { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
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

  handleFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
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
          />
          <button type="submit"> Add contact</button>
        </form>
        <h2> Contacts</h2>
        <input type="text" name="filter" onChange={this.handleFilter} />
        <ul>
          {this.filterContacts().map((contact) => (
            <li key={contact.id}>
              {contact.name} ---- {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
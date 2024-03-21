import { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  contactId = nanoid(6);

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const contact = { id: this.contactId, name };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
        name: "",
      };
    });
    form.reset();
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map((contact) => (
            <li key={contact.id}>
              {contact.id} : {contact.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

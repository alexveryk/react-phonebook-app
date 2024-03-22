import { Component } from 'react';
import { Filter } from '../Filter/Filter';

export class Contacts extends Component {
  render() {
    const { handleChange, contacts } = this.props;

    return (
      <>
        <h2> Contacts</h2>
        <Filter handleChange={handleChange} />
        <ul>
          {contacts().map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

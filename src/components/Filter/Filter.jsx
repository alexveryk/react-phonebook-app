import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <>
        <input type="text" name="filter" onChange={handleChange} />
      </>
    );
  }
}

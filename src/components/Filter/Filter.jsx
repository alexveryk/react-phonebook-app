import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <>
        <input
          className={styles.filter}
          type="text"
          name="filter"
          onChange={handleChange}
          placeholder="Find contacts by name"
        />
      </>
    );
  }
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

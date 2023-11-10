import React, { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className="form">
          <button type="submit" class="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

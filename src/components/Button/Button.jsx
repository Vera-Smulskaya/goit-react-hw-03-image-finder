import React, { Component } from 'react';
import css from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onClick} className={css.button}>
        {this.props.children}
      </button>
    );
  }
}

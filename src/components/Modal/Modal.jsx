import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onClick} className={css.button}>
        {this.props.children}
      </button>
    );
  }
}

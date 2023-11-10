import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

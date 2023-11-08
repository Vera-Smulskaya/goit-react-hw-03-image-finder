import React, { Component } from 'react';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    return <ul className={css.gallery}></ul>;
  }
}

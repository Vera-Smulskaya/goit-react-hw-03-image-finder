import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={CSS.imageGalleryItem}>
        <img className={CSS.imageGalleryItemImage} src="" alt="" />
      </li>
    );
  }
}

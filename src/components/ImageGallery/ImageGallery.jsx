import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { images, showModal } = this.props;

    return (
      <ul className={css.gallery}>
        {images.map(image => (
          <li>
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              tags={image.tags}
              showModal={showModal}
            />
          </li>
        ))}
      </ul>
    );
  }
}

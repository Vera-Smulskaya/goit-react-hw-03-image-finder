import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import css from './App.module.css';

const KEY = '39479425-6a3db35f3651c21ffc7f636b4';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  fetchImages = async () => {
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: data });
  };

  componentDidMount() {
    this.fetchImages();
  }
  render() {
    return (
      <div className={css.app}>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}

import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import css from './App.module.css';
import Button from './Button/Button';

// const KEY = '39479425-6a3db35f3651c21ffc7f636b4';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    searchImages: '',
    isLoading: false,
    showLoadMore: false,
    showModal: false,
    largeImageURL: [],
    error: null,
  };

  fetchImages = async () => {
    const { data } = await axios.get(
      'https://pixabay.com/api/?q=cat&page=1&key=39479425-6a3db35f3651c21ffc7f636b4&image_type=photo&orientation=horizontal&per_page=12'
    );
    this.setState({ images: data.hits });
    console.log(data.hits);
  };

  componentDidMount() {
    this.fetchImages();
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    console.log('Show modal');
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} showModal={this.toggleModal} />
        <Button onClick={this.onLoadMore}>Load more</Button>
      </div>
    );
  }
}

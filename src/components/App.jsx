import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import css from './App.module.css';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const KEY = '39479425-6a3db35f3651c21ffc7f636b4';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    searchImages: '',
    isLoading: false,
    showLoadMore: false,
    showModal: false,
    largeImageURL: [],
    imageTags: '',
    error: null,
  };

  fetchImages = async () => {
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=${this.state.searchImages}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: data.hits });
  };

  componentDidMount() {
    this.fetchImages();
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = (largeImageURL, imageTags) => {
    this.setState(state => ({
      showModal: !state.showModal,
      largeImageURL: largeImageURL,
      imageTags: imageTags,
    }));
  };

  onSubmit = event => {
    event.preventDefault();
    const searchData = event.target.elements.search.value;
    this.setState({ searchImages: searchData });
    this.fetchImages();
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} showModal={this.toggleModal} />
        <Button onClick={this.onLoadMore}>Load more</Button>
        {this.state.showModal && (
          <Modal
            closeModal={this.toggleModal}
            alt={this.state.imageTags}
            image={this.state.largeImageURL}
          />
        )}
      </div>
    );
  }
}

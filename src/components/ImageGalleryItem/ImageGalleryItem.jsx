import React, { Component } from 'react';
import { ImageGalItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <ImageGalItem>
        <ImageGalleryItemImage
          src={webformatURL}
          alt="img"
          onClick={this.toggleModal}
        />
        {isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="img" />
          </Modal>
        )}
      </ImageGalItem>
    );
  }
}

export default ImageGalleryItem;

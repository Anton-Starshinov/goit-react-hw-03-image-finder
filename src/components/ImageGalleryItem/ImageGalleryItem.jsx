import React, { Component } from 'react';
import { ImageGalItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <ImageGalItem>
        <ImageGalleryItemImage src={webformatURL} alt="img" />
      </ImageGalItem>
    );
  }
}

export default ImageGalleryItem;

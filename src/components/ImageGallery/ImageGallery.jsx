import fetchImg from 'API';
import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { request } = this.props;

    if (prevProps.request !== this.props.request) {
      console.log('prop', this.props.request);
      try {
        const imgApi = await fetchImg(request);
        this.setState({ images: [...this.state.images, ...imgApi] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { images } = this.state;
    return (
      <ImageGalleryList>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ImageGalleryList>
    );
  }
}

export default ImageGallery;

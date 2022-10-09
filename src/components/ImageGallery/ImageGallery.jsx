import fetchImg from 'API';
import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { request } = this.props;

    if (prevProps.request !== request) {
      console.log('prop', this.props.request);
      try {
        this.setState({ loading: true });
        const imgApi = await fetchImg(request);
        this.setState({ images: [...this.state.images, ...imgApi] });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  render() {
    const { images, loading } = this.state;

    return (
      <div>
        <ImageGalleryList>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
        </ImageGalleryList>
        {loading && <Loader />}
      </div>
    );
  }
}

export default ImageGallery;

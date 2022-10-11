import fetchImg from 'API';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { request } = this.props;
    const { page, images } = this.state;

    if (prevProps.request !== request) {
      this.setState({ images: [], page: 1 });
    }

    if (prevProps.request !== request || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const imgApi = await fetchImg(request, page);

        this.setState({ images: [...images, ...imgApi] });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading, error } = this.state;

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
        {error && <p>Whoops, something went wrong</p>}
        {images.length !== 0 && images.length >= 12 && images.length < 500 && (
          <Button onClickLoadMore={this.loadMore} />
        )}
        {loading && <Loader />}
      </div>
    );
  }
}

export default ImageGallery;

ImageGallery.propType = {
  request: PropTypes.string.isRequired,
};

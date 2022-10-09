import fetchImg from 'API';
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
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { request } = this.props;
    const { page, images } = this.state;
    const updatePage = prevProps.request !== request ? 1 : page;

    if (prevProps.request !== request || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const imgApi = await fetchImg(request, page);
        this.setState({ images: [...this.state.images, ...imgApi] });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
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
        {images.length !== 0 && images.length >= 12 && (
          <Button onClickLoadMore={this.loadMore} />
        )}
        {loading && <Loader />}
      </div>
    );
  }
}

export default ImageGallery;

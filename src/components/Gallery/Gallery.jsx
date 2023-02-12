import { Component } from 'react';
import Loader from '../elements/Loader/Loader';
import SearchBar from './Searchbar/Serchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import { SearchQuery } from '../elements/services/image-api';

import { Block, TextError, ButtonLoadMore } from '../Gallery/Gallery.styled.js';
import './index.css';

export class Gallery extends Component {
  state = {
    search: '',
    items: [],
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ isLoading: true });
      SearchQuery(search)
        .then(data => this.setState({ items: [...data.hits] }))
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  searchImage = ({ search }) => {
    this.setState({ search });
  };

  render() {
    const { items, isLoading, error } = this.state;
    const { searchImage } = this;

    return (
      <>
        <Block>
          <SearchBar onSubmit={searchImage} />
        </Block>

        <ImageGalleryItem items={items} />
        {/* {!items.length && (
          <TextError>
            Image not found. Please change the query and try again
          </TextError>
        )} */}
        {error && <TextError>{error}</TextError>}
        {isLoading && <Loader />}
        {Boolean(items.length) && (
          <ButtonLoadMore type="button">Load more</ButtonLoadMore>
        )}
      </>
    );
  }
}

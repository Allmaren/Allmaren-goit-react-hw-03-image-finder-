import PropTypes from 'prop-types';
import { Component } from 'react';
import { SearchForm, Input } from './SeachBar.styled.js';

class SearchBar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      search: '',
    });
  };

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
          name="search"
          value={search}
          onChange={handleChange}
        />
      </SearchForm>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

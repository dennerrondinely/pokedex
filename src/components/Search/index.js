import React from 'react';
import PropTypes from 'prop-types';
import { Search as SearchIcon } from '@styled-icons/material/Search';
import { Close } from '@styled-icons/material/Close';
import { Container } from './styles';

export default function Search({ value, change, clear, search }) {
  return (
    <Container>
      <SearchIcon onClick={search} />
      <input
        type="text"
        placeholder="Search Pokemon"
        onChange={change}
        value={value ?? ''}
      />
      <Close onClick={clear} />
    </Container>
  );
}

Search.defaultProps = {
  value: '',
};
Search.propTypes = {
  value: PropTypes.string,
  change: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

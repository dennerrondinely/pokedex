import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';

import { Container } from './styles';

export default function NotFound({ close }) {
  return (
    <Container>
      <h1>Sorry, no result found :(</h1>
      <div>
        <p>The Pokemon you searched was</p>
        <p>unfortunately not found or does&apos;t exist.</p>
      </div>
      <button type="button" onClick={() => close()}>
        <KeyboardArrowLeft size={20} /> <span>Back to home</span>
      </button>
    </Container>
  );
}

NotFound.propTypes = {
  close: PropTypes.func.isRequired,
};

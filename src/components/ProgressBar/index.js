import React from 'react';
import PropTypes from 'prop-types';

import { Container, Bar } from './styles';

export default function ProgressBar({ progress }) {
  return (
    <Container>
      <span>{progress}</span>
      <Bar progress={progress}>
        <div />
      </Bar>
    </Container>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

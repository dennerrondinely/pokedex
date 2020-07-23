import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, ImageContainer } from './styles';

export default function Card({ pokemon }) {
  const [type] = pokemon.types;

  return (
    <Container data-type={type}>
      <Link to={`/details/${pokemon.id}`}>
        <div>
          <h2>{pokemon.name}</h2>
          {pokemon.formattedTypes.map((value) => (
            <span key={value}>{value}</span>
          ))}
          <h3>{pokemon.idFormatted}</h3>
        </div>
        <ImageContainer>
          <div />
          <img src={pokemon.image} alt={pokemon.name} />
        </ImageContainer>
      </Link>
    </Container>
  );
}

Card.propTypes = {
  pokemon: PropTypes.shape({
    types: PropTypes.arrayOf(PropTypes.string),
    formattedTypes: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    image: PropTypes.string,
    idFormatted: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

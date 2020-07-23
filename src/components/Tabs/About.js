import React from 'react';
import PropTypes from 'prop-types';

import { About, Male, Female } from './styles';

function Item({ title, children }) {
  return (
    <li>
      <span>{title}</span>
      <small>{children ?? ''} </small>
    </li>
  );
}
export default function AboutPokemon({ pokemon }) {
  return (
    <About>
      <Item title="Species">{pokemon.species}</Item>
      <Item title="Height">{pokemon.height} cm</Item>
      <Item title="Weight">{pokemon.weight} Kg</Item>
      <Item title="Abilities">{pokemon.abilities}</Item>

      <li>
        <h3>Breeding</h3>
      </li>

      <Item title="Gender">
        <Male />
        {pokemon.male}% <Female />
        {pokemon.female}%{' '}
      </Item>
      <Item title="Egg Groups">
        {pokemon.eggGroups?.map((egg) => egg.name).join(', ')}
      </Item>

      <li>
        <h3>Training</h3>
      </li>

      <Item title="Base EXP">{pokemon.baseXP}</Item>
      <Item title="Effort points">
        {pokemon.effortPoints?.effort} {pokemon.effortPoints?.stat?.name}
      </Item>
      <Item title="Capture rate">{pokemon.captureRate}</Item>
      <Item title="Base happiness">{pokemon.baseHappiness}</Item>
      <Item title="Growth rate">{pokemon.growthRate}</Item>
    </About>
  );
}
Item.defaultProps = {
  children: <span />,
};

Item.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

AboutPokemon.propTypes = {
  pokemon: PropTypes.shape({
    species: PropTypes.string,
    height: PropTypes.number,
    captureRate: PropTypes.number,
    weight: PropTypes.number,
    abilities: PropTypes.string,
    baseXP: PropTypes.number,
    male: PropTypes.number,
    growthRate: PropTypes.string,
    female: PropTypes.number,
    baseHappiness: PropTypes.number,
    effortPoints: PropTypes.shape(),
    eggGroups: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

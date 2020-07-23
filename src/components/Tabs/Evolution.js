import React from 'react';
import PropTypes from 'prop-types';

import { Evolution } from './styles';

export default function EvolutionPokemon({ evolutions }) {
  return (
    <Evolution>
      {evolutions?.map((evo, i) => (
        <li key={evo.name}>
          <h2>Stage {i + 1}</h2>
          <div>
            <div>
              <img src={evo.img} alt="" />
            </div>
            <div>
              <h3>{evo.name}</h3>
              <p>Level up, starting at</p>
              <p>level {evo.level}</p>
            </div>
          </div>
        </li>
      ))}
    </Evolution>
  );
}

EvolutionPokemon.propTypes = {
  evolutions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

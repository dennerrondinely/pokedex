/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';

import Progress from '../ProgressBar';

import { Stats } from './styles';

export default function StatsPokemon({ stats }) {
  const total = stats?.reduce(
    (ammount, currency) => (ammount += currency.base),
    0
  );

  return (
    <Stats>
      {stats?.map((stat) => (
        <li key={stat.name}>
          <span>{stat.name}</span>
          <Progress progress={stat.base} />
        </li>
      ))}
      <li>
        <span>Total</span>
        <Progress progress={total} />
      </li>
    </Stats>
  );
}

StatsPokemon.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

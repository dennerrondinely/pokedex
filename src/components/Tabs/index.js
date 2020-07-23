import React, { useState } from 'react';
import PropTypes from 'prop-types';

import About from './About';
import Stats from './Stats';
import Evolution from './Evolution';

import { Container, Button, Content } from './styles';

export default function Tabs({ pokemon }) {
  const [select, setSelect] = useState(1);
  function handleSelect(id) {
    setSelect(id);
  }
  return (
    <Container>
      <nav>
        <Button
          type="button"
          select={select === 1}
          onClick={() => handleSelect(1)}
        >
          About
        </Button>
        <Button
          type="button"
          select={select === 2}
          onClick={() => handleSelect(2)}
        >
          Base Stats
        </Button>
        <Button
          type="button"
          select={select === 3}
          onClick={() => handleSelect(3)}
        >
          Evolution
        </Button>
      </nav>
      <Content>
        {select === 1 && <About pokemon={pokemon} />}
        {select === 2 && <Stats stats={pokemon.stats} />}
        {select === 3 && <Evolution evolutions={pokemon.evolutions} />}
      </Content>
    </Container>
  );
}

Tabs.propTypes = {
  pokemon: PropTypes.shape({
    stats: PropTypes.arrayOf(PropTypes.shape({})),
    evolutions: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

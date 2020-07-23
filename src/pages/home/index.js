import React, { useEffect, useState } from 'react';

import Search from '../../components/Search';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import NotFound from '../../components/NotFound';

import api from '../../services/api';

import { pokemonSerialize } from '../../utils/serializePokemon';

import { Container } from './styles';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [memo, setMemo] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [value, setValue] = useState(null);
  const [pagination, setPagination] = useState(true);

  async function getPokemons(min, max) {
    const promises = [];
    for (let i = min; i <= max; i += 1) {
      promises.push(api(`pokemon/${i}`));
    }
    const result = await pokemonSerialize(promises);
    setPokemons(result);
    setMemo(result);
  }

  function restorePokemons() {
    setPokemons(memo);
    setNotFound(false);
  }

  function handleClear() {
    setValue('');
    restorePokemons();
    setPagination(true);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handlePaginate(e) {
    const calc = e * 12;
    const min = calc - 11;
    const max = calc > 151 ? 151 : calc;
    getPokemons(min, max);
  }

  async function handleSearch() {
    setPagination(false);
    try {
      if (value) {
        const resp = await pokemonSerialize([api(`pokemon/${value}`)]);
        setPokemons(resp);
      } else {
        restorePokemons();
      }
    } catch (error) {
      setNotFound(true);
    }
  }

  useEffect(() => {
    async function callPokemons() {
      const promises = [];
      for (let i = 1; i <= 12; i += 1) {
        promises.push(api(`pokemon/${i}`));
      }
      const result = await pokemonSerialize(promises);
      setPokemons(result);
      setMemo(result);
    }
    callPokemons();
  }, []);

  return (
    <Container>
      <header>
        <h1>Pokedex</h1>
        <Search
          change={handleChange}
          value={value}
          clear={handleClear}
          search={handleSearch}
        />
      </header>
      {notFound ? (
        <NotFound close={handleClear} />
      ) : (
        <>
          <ul>
            {pokemons.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </ul>
        </>
      )}
      <Pagination
        postsPerPage={12}
        totalPosts={151}
        paginate={handlePaginate}
        show={pagination}
      />
    </Container>
  );
}

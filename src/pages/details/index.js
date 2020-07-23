import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowBack } from '@styled-icons/material/ArrowBack';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { Favorite } from '@styled-icons/material/Favorite';

import api from '../../services/api';

import {
  pokemonSerialize,
  evolutionSerialize,
  especiesSerialize,
} from '../../utils/serializePokemon';

import Tabs from '../../components/Tabs';

import {
  Container,
  ContainerImage,
  TypesContainer,
  ContainerDetails,
  HeaderFirst,
  HeaderLast,
} from './styles';

export default function Details() {
  const [pokemon, setPokemon] = useState({});
  const [type, setType] = useState('');
  const [favorite, setFavorite] = useState(false);
  const { id } = useParams();

  function handleFavorite() {
    setFavorite(!favorite);
  }

  useEffect(() => {
    async function getDetails() {
      const [resp] = await pokemonSerialize([api(`pokemon/${id}`)]);
      const species = await especiesSerialize(id);
      const evolutions = await evolutionSerialize(species);
      const [firstType] = resp.types;
      const femaleRate = species.genderRate;
      const female = 12.5 * femaleRate;
      const male = 12.5 * (8 - femaleRate);

      const data = { ...resp, ...species, female, male, evolutions };
      setPokemon(data);
      setType(firstType);
    }
    getDetails();
  }, [id]);

  return (
    <Container>
      <header data-type={type}>
        <div>
          <HeaderFirst>
            <Link to="/">
              <ArrowBack size={25} />
            </Link>
            <h1>
              {pokemon.name}

              <TypesContainer>
                {pokemon?.formattedTypes?.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </TypesContainer>
            </h1>
          </HeaderFirst>
          <HeaderLast>
            {favorite ? (
              <Favorite size={25} onClick={handleFavorite} />
            ) : (
              <FavoriteBorder size={25} onClick={handleFavorite} />
            )}

            <small>{pokemon.idFormatted}</small>
          </HeaderLast>

          <ContainerImage>
            <div />
            <img src={pokemon.image} alt={pokemon.name} />
          </ContainerImage>
          <div />
        </div>
      </header>
      <ContainerDetails>
        <Tabs pokemon={pokemon} />
      </ContainerDetails>
    </Container>
  );
}

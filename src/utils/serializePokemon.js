/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import api from '../services/api';

function formattedId(id) {
  let newId = `#0${id}`;
  if (id < 10) newId = `#00${id}`;
  if (id > 100) newId = `#${id}`;
  return newId;
}

function nameFormatted(name) {
  return name
    .split('')
    .map((b, i) => (i === 0 ? b.toUpperCase() : b))
    .join('');
}

export function pokemonSerialize(promises) {
  return Promise.all(promises).then((pokemonsList) => {
    return pokemonsList.map((pokemon) => ({
      name: nameFormatted(pokemon.name),
      image: pokemon.sprites.front_default,
      types: pokemon.types.map((type) => type.type.name),
      formattedTypes: pokemon.types.map((type) =>
        nameFormatted(type.type.name)
      ),
      id: pokemon.id,
      stats: pokemon.stats.map(({ base_stat: base, stat }) => ({
        base,
        name: stat.name,
      })),
      abilities: pokemon.abilities
        .map(({ ability }) => ability.name)
        .join(', '),
      height: pokemon.height / 10,
      weight: pokemon.weight / 10,
      baseXP: pokemon.base_experience,
      species: pokemon.species.name,
      effortPoints: pokemon.stats.find(({ effort }) => effort !== 0),
      idFormatted: formattedId(pokemon.id),
    }));
  });
}

export async function especiesSerialize(id) {
  const {
    capture_rate,
    base_happiness,
    growth_rate,
    evolution_chain,
    gender_rate,
    egg_groups,
  } = await api(`pokemon-species/${id}`);
  return {
    captureRate: capture_rate,
    baseHappiness: base_happiness,
    growthRate: growth_rate.name,
    url: evolution_chain.url,
    genderRate: gender_rate,
    eggGroups: egg_groups,
  };
}

function paths(item) {
  const result = [];
  function iter(r, p) {
    const keys = Object.keys(r);
    if (keys.length) {
      return keys.forEach((x) => {
        if (
          x === '0' ||
          x === '1' ||
          x === '2' ||
          x === '3' ||
          x === '4' ||
          x === '5' ||
          x === '6' ||
          x === '7' ||
          x === 'evolves_to'
        ) {
          iter(r[x], p.concat(x));
          if (r.length) {
            const details = r[x];
            result.push({
              name: details.species.name,
              level: details.evolution_details[0].min_level,
            });
          }
        }
      });
    }
  }
  iter(item, []);
  return result;
}

export async function evolutionSerialize(data) {
  const endPoint = data.url.replace('https://pokeapi.co/api/v2/', '');
  const resp = await api(`${endPoint}`);
  let evos = paths(resp.chain);
  evos = await Promise.all(
    evos.map(async (evo) => {
      const img = await api(`pokemon/${evo.name}`);
      return { ...evo, img: img.sprites.front_default };
    })
  );
  evos.sort((a, b) => a.level - b.level);
  return evos;
}

const api = (endPoint) =>
  fetch(`https://pokeapi.co/api/v2/${endPoint}`).then((res) => res.json());

export default api;

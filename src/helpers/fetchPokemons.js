export const getPokemons = async (
  endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=20'
) => {
  try {
    const data = await fetch(endpoint);

    const pokemons = await data.json();

    return pokemons;
  } catch (error) {
    console.log('Ha sucedido un error');
  }
};

export const getEachPokemon = async (endpoint) => {
  try {
    const data = await fetch(endpoint);

    const pokemon = await data.json();

    return {
      name: pokemon?.name,
      height: pokemon?.height,
      weight: pokemon?.weight,
      image: pokemon?.sprites?.front_default,
    };
  } catch (error) {
    console.log('Ha sucedido un error');
  }
};

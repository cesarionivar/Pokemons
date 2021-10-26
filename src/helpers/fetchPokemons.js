export const getPokemons = async () => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);

    const pokemons = await data.json();

    return pokemons.results;
  } catch (error) {
    console.log('Ha sucedido un error');
    throw new Error('Error al obtener los datos');
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
    throw new Error('Error al obtener los datos');
  }
};

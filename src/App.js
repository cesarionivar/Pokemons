import { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';
import { getEachPokemon, getPokemons } from './helpers/fetchPokemons';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((pokemons) => {
      pokemons.forEach((pokemon) => {
        getEachPokemon(pokemon?.url).then((poke) => {
          setPokemons((pokemons) => [...pokemons, poke]);
        });
      });
    });
  }, []);

  return (
    <div className='container mt-4 mb-4'>
      <h1 className='fw-bold'>Pokemons</h1>
      <hr />
      <div className='grid-pokemones'>
        {pokemons?.map((pokemon, idx) => (
          <Pokemon key={`pokemon-${idx + 1}`} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;

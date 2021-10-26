import { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';
import { getEachPokemon, getPokemons } from './helpers/fetchPokemons';

const App = () => {
  const [results, setResults] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [endpoint, setEndpoint] = useState();

  useEffect(() => {
    getPokemons(endpoint).then((pokemons) => {
      setResults(pokemons);
      pokemons.results.forEach((pokemon) => {
        getEachPokemon(pokemon?.url).then((poke) => {
          setPokemons((pokemons) => [...pokemons, poke]);
        });
      });
    });
  }, [endpoint, setPokemons, setResults]);

  const handleNext = () => {
    setEndpoint(results.next);
  };

  return (
    <div className='container mt-4 mb-4'>
      <h1 className='fw-bold'>Pokemons</h1>
      <hr />
      <div className='grid-pokemones'>
        {pokemons?.map((pokemon, idx) => (
          <Pokemon key={`pokemon-${idx + 1}`} pokemon={pokemon} />
        ))}
      </div>
      <div className='mt-3 d-flex justify-content-end'>
        <button onClick={handleNext} className='btn btn-primary'>
          Get more...
        </button>
      </div>
    </div>
  );
};

export default App;

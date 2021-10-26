import PropTypes from 'prop-types';

const Pokemon = ({ pokemon }) => {
  return (
    <div className='card'>
      <img
        src={pokemon?.image}
        className='card-img-top img-poke'
        alt={pokemon?.name}
      />
      <div className='card-body'>
        <h5 className='card-title text-capitalize'>{pokemon?.name}</h5>
        <div className='card-text'>
          <span className='fw-bold'>Height:</span> {pokemon?.height} inches
        </div>
        <p className='card-text'>
          <span className='fw-bold'>Weight:</span> {pokemon?.weight} pounds
        </p>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;

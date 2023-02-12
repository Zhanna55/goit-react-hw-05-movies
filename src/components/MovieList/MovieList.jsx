import PropTypes from 'prop-types';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import { MovieContainer } from './MovieList.styled';

export const MovieList = ({ movies, locationState, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <MovieContainer>
        {movies.map(movie => (
          <MovieListItem
            key={movie.id}
            movie={movie}
            locationState={locationState}
          />
        ))}
      </MovieContainer>
    </>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string,
    })
  ),
};

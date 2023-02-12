import PropTypes from 'prop-types';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';

export const MovieList = ({ movies, locationState, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {movies.map(movie => (
          <MovieListItem
            key={movie.id}
            movie={movie}
            locationState={locationState}
          />
        ))}
      </ul>
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

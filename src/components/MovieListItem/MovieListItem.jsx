import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultPoster from '../../images/defaultPoster.png';
import { MovieItem, Image, Title } from './MovieListItem.styled';

export const MovieListItem = ({ movie, locationState }) => {
  const { id, title, poster_path } = movie;
  return (
    <Link to={`/movies/${id}`} state={{ from: locationState }}>
      <MovieItem>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : defaultPoster
          }
          alt={title}
        />
        <Title>{title}</Title>
      </MovieItem>
    </Link>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
  locationState: PropTypes.object.isRequired,
};

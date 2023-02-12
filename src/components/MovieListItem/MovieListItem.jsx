import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieListItem = ({ movie, locationState }) => {
  const { id, title } = movie;
  return (
    <Link to={`/movies/${id}`} state={{ from: locationState }}>
      <li>
        <p>{title}</p>
      </li>
    </Link>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
  }),
  locationState: PropTypes.object.isRequired,
};

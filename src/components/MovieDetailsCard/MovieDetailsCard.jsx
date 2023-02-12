import PropTypes from 'prop-types';
import defaultPoster from '../../images/defaultPoster.png';
import { CardContainer } from './MovieDetailsCard.styled';

export const MovieDetailsCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  console.log(movie);
  return (
    <CardContainer>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : defaultPoster
        }
        alt={title}
        style={{ width: 300 }}
      />
      <div>
        <h1>
          {title} <span>({release_date.slice(0, 4)})</span>
        </h1>
        <p>User Score: {vote_average.toFixed(1) * 10}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => name).join(' ')}</p>
      </div>
    </CardContainer>
  );
};

MovieDetailsCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

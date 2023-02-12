import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/Api';
import defaultImg from 'images/noFoto.png';

const MovieDetailsCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const movieCast = await getMovieCredits(movieId);
        console.log(movieCast.cast);
        setCast(movieCast.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w185${profile_path}`
                    : defaultImg
                }
                alt={name}
                style={{ width: 185 }}
              />
              <p>{name}</p>
              <p>
                <span>Character:</span> {character}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MovieDetailsCast;

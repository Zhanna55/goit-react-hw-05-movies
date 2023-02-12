import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/Api';
import defaultImg from 'images/noFoto.png';
import {
  CastList,
  CastItem,
  CastDescription,
  Image,
} from './MovieDetailsCast.styled';

const MovieDetailsCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const movieCast = await getMovieCredits(movieId);
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
        <CastList>
          {cast.map(({ id, name, character, profile_path }) => (
            <CastItem key={id}>
              <Image
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w185${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <CastDescription>
                <p>{name}</p>
                <p>
                  <span>Character:</span> {character}
                </p>
              </CastDescription>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
};
export default MovieDetailsCast;

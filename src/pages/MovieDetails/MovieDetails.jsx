import { useState, useEffect } from 'react';
import {
  Outlet,
  useParams,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import { getMovieDetails } from 'services/Api';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import { Container, Button, Wrapper } from './MovieDetails.styled';
import Status from 'utils/status';

const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    async function fetchMovieDetails() {
      try {
        const movie = await getMovieDetails(movieId);
        console.log(movie);
        setMovie(movie);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  const goBack = () => navigate(backLink);
  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <Error />}
      {status === Status.RESOLVED && movie && (
        <Container>
          <Button onClick={goBack}>Go Back</Button>
          <MovieDetailsCard movie={movie} />

          <Wrapper>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link state={{ from: backLink }} to="cast">
                  Cast
                </Link>
              </li>
              <li>
                <Link state={{ from: backLink }} to="reviews">
                  Reviews
                </Link>
              </li>
            </ul>
          </Wrapper>
          <Outlet />
        </Container>
      )}
    </>
  );
};

export default MovieDetails;

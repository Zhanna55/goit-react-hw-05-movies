import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovies } from 'services/Api';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import Status from 'utils/status';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetchMovies() {
      setStatus(Status.PENDING);
      try {
        const movies = await getSearchMovies(searchQuery);
        if (movies.results.length === 0) {
          setStatus(Status.REJECTED);
          toast.info(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          return;
        }
        setMovies(movies.results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      }
    }
    fetchMovies();
  }, [searchQuery]);
  const handleSubmit = query => {
    if (!query.trim()) {
      setMovies(null);
      toast.info('Please, enter something');
    }
    setSearchParams({ query });
  };
  return (
    <>
      <SearchMovies onSubmit={handleSubmit} />
      {status === Status.IDLE || (status === Status.RESOLVED && <></>)}
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && movies && (
        <MovieList
          movies={movies}
          locationState={location}
          title={'Search results'}
        />
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Movies;

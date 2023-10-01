import { useSearchParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const API_KEY = '11dbf7ff99397f09579266bad6d825fc';
const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
const params = new URLSearchParams({
  api_key: API_KEY,
  include_adult: false,
  language: 'en-US',
  page: 1,
  query: '',
});

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  function onLoad() {
    const q = searchParams.get('q');
    if (!q) {
      return;
    }

    params.set('query', q);
    axios.get(`${BASE_URL}?${params}`).then(resp => {
      setMovies(
        resp.data.results.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {' '}
              {movie.title}
            </Link>
          </li>
        ))
      );
    });
  }
  onLoad();

  function onInput(evt) {
    if (evt.key !== 'Enter' || !evt.target.value) {
      return;
    }
    const { value } = evt.target;
    setSearchParams({ q: evt.target.value });

    params.set('query', value);
    axios.get(`${BASE_URL}?${params}`).then(resp => {
      setMovies(
        resp.data.results.map(movie => {
          return (
            <li>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })
      );
    });
  }

  return (
    <>
      <input type="text" name="search" id="search" onKeyDown={onInput} />
      {movies}
    </>
  );
};

export default Movies;

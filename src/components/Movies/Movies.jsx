import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const API_KEY = '11dbf7ff99397f09579266bad6d825fc';
const params = new URLSearchParams({
  api_key: API_KEY,
  include_adult: false,
  language: 'en-US',
  page: 1,
  query: '',
});

const Movies = () => {
  const [movies, setMovies] = useState([]);

  function onInput(evt) {
    const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
    const { value } = evt.target;
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
      <input type="text" name="search" id="search" onInput={onInput} />
      {movies}
    </>
  );
};

export default Movies;

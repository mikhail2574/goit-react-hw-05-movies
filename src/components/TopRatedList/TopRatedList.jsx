import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopRatedList = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const BASE_URL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=11dbf7ff99397f09579266bad6d825fc`;
        const response = await axios.get(BASE_URL);
        setTopRatedMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching top rated movies:', error);
      }
    };

    getTopRatedMovies();
  }, []); // Пустой массив означает, что эффект будет вызван только при монтировании и размонтировании компонента

  return (
    <ul>
      {topRatedMovies.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TopRatedList;

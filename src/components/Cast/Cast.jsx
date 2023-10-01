import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=11dbf7ff99397f09579266bad6d825fc&language=en-US&page=1`;
        const response = await axios.get(BASE_URL);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    getCast();
  }, [id, cast]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(credit => (
          <li key={credit.id}>
            <img
              alt="author"
              src={`https://image.tmdb.org/t/p/w500/${credit.profile_path}`}
            />
            <p>{credit.name}</p>
            <p>{credit.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

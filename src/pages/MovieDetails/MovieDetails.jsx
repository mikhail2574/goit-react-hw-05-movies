import React, { useState, useEffect } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(location);
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const BASE_URL = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=11dbf7ff99397f09579266bad6d825fc`;
        const response = await axios.get(BASE_URL);
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieData();
  }, [id]);

  if (!movieData) {
    return <p>Not found</p>;
  }

  const {
    title,
    overview,
    budget,
    tagline,
    vote_average,
    vote_count,
    backdrop_path,
  } = movieData;

  return (
    <div className="movie">
      <Link to={backLinkHref}>Back to movies</Link>
      <img
        alt="movie preview"
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
      />
      <h1>{title}</h1>
      <p>{tagline}</p>
      <p>{overview}</p>
      <p>Budget: {budget}$</p>
      <p>Rating: {vote_average.toFixed(1)} / 10</p>
      <p>Votes: {vote_count}</p>
      <Link to="reviews" state={{ from: backLinkHref }}>
        Look reviews
      </Link>
      <Link to="cast" state={{ from: backLinkHref }}>
        Look credits
      </Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=11dbf7ff99397f09579266bad6d825fc&language=en-US&page=1`;
        const response = await axios.get(BASE_URL);
        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    getReviews();
  }, [id]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

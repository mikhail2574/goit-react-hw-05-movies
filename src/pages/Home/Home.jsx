import React from 'react';
import TopRatedList from 'components/TopRatedList/TopRatedList';

const Home = () => {
  return (
    <>
      <h2>Our top rated movies:</h2>
      <ul>
        <TopRatedList />
      </ul>
    </>
  );
};

export default Home;

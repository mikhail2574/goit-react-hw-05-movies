import React from 'react';
import TopRatedList from 'components/TopRatedList/TopRatedList';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2>Our top rated movies:</h2>
      <ul>
        <TopRatedList />
      </ul>
      <Outlet />
    </>
  );
};

export default Home;

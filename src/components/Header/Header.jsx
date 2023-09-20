import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from 'components/Home/Home';
import Movies from 'components/Movies/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Reviews from 'components/Reviews/Reviews';

const Header = () => {
  return (
    <Router>
      <div className="header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
        <Outlet />
      </div>
    </Router>
  );
};

export default Header;

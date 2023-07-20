import React, { useState } from "react";
import Header from "./Components/Header";
import List from "./Components/List";
import Modal from "./Components/Modal";
import Search from "./Components/Search";
import Favourite from "./Components/Favourite";
import FavouriteError from "./Components/FavouriteError";
import SearchError from "./Components/SearchError";

const API_KEY = "af090d9a7f67d2d0bed1381e5dacf811";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleSearch = async (query) => {
    try {
      const data = await fetchMovies(query);
      setMovies(data.results);
      setShowFavorites(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchMovies = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return await response.json();
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleAddToFavorites = (movie) => {
    const isAlreadyPresent = favorites.some(
      (favMovie) => favMovie.id === movie.id
    );

    if (!isAlreadyPresent) {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }
  };

  const handleFavoriteClick = (favorite) => {
    setSelectedMovie(favorite);
    setShowFavorites(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <Header />
      <Search onSearch={handleSearch} setShowFavorites={setShowFavorites} />

      {showFavorites ? (
        favorites.length === 0 ? (
          <FavouriteError />
        ) : (
          <Favourite
            favorites={favorites}
            onFavoriteClick={handleFavoriteClick}
          />
        )
      ) : movies.length === 0 ? (
        <SearchError />
      ) : (
        <List movies={movies} onMovieClick={handleMovieClick} />
      )}

      {selectedMovie && (
        <Modal
          movie={selectedMovie}
          onClose={handleCloseModal}
          onAddToFavorites={handleAddToFavorites}
        />
      )}
    </div>
  );
};

export default App;

import React from "react";
import "./Styles.css";

const List = (props) => {
  const renderMovieItem = (movie) => {
    return (
      <div
        key={movie.id}
        className="movie-item"
        onClick={() => props.onMovieClick(movie)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} : Image not found`}
        />
        <h2>{movie.title}</h2>
        <p>Release Date 📅: {movie.release_date}</p>
        <p>Rating ⭐: {movie.vote_average}</p>
      </div>
    );
  };

  return <div className="movie-list">{props.movies.map(renderMovieItem)}</div>;
};

export default List;

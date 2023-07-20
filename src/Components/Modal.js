import React, { useState } from "react";
import "./Styles.css";

const Modal = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favHandler = () => {
    if (!isFavorite) {
      props.onAddToFavorites(props.movie);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="buttons">
          <button onClick={favHandler}>
            {isFavorite ? "Added✔️" : "Add to Favorites ❤️"}
          </button>
          <button onClick={props.onClose}>Close ❌</button>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <h2>{props.movie.title}</h2>
        <p>Release Date: {props.movie.release_date}</p>
        <p>Rating: {props.movie.vote_average}</p>
        <p>{props.movie.overview}</p>
      </div>
    </div>
  );
};

export default Modal;

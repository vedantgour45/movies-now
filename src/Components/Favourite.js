import React from "react";
import "./Styles.css";

const Favourite = (props) => {
  return (
    <div className="favorites-list">
      {props.favorites.map((favorite) => (
        <div
          key={favorite.id}
          className="favorite-item"
          onClick={() => props.onFavoriteClick(favorite)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200${favorite.poster_path}`}
            alt={favorite.title}
          />

          <h3>{favorite.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Favourite;

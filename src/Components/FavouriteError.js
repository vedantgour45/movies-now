import React from "react";
import fav from "../Assets/fav.png";

const FavouriteError = () => {
  return (
    <div className="fav-error">
      <h1>Your Favouries List Is Empty</h1>
      <img src={fav} alt="favourite error" />
    </div>
  );
};

export default FavouriteError;

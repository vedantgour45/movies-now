import React from "react";
import background from "../Assets/background1.png";

const SearchError = () => {
  return (
    <div className="error-img">
      <h3 className="error">Please enter a valid movie name</h3>
      <img src={background} alt="background-img" />
    </div>
  );
};

export default SearchError;

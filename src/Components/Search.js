import React, { useState } from "react";
import "./Styles.css";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(query);
  };

  const handleShowFavorites = () => {
    props.setShowFavorites(true);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies here..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search 🔎</button>
      </form>
      <button className="favourite" onClick={handleShowFavorites}>
        Your Favourites ❤️
      </button>
    </div>
  );
};

export default Search;

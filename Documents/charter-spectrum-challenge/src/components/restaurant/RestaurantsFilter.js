import React, { useState } from "react";
import "./RestaurantsFilter.css";

const RestaurantsFilter = ({
  statesList,
  onStateChange,
  genreList,
  onGenreChange,
  onSearch
}) => {
  const [searchText, setSearchText] = useState("");
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  const handleChange = event => {
    const { value } = event.target;
    setSearchText(value);
    if (value === "") {
      onSearch(value);
    }
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="restaurants-filter">
      <h3 className="filter-title">Filters</h3>
      <div>
        <label className="label">Search</label>
        <div className="search-container">
          <input
            type="text"
            name="searchText"
            className="search-box"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button className="search-btn" onClick={handleSearch}>
            🔍
          </button>
        </div>
      </div>
      <div>
        <label className="label">Filter By State</label>
        <select className="state-filter" onChange={onStateChange}>
          {statesList.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="label">Filter by Genre</label>
        <select className="genre-filter" onChange={onGenreChange}>
          {genreList.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RestaurantsFilter;

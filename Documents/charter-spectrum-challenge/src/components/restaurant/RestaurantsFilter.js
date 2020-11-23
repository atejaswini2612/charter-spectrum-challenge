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
  const [isDisableFilters, setIsDisableFilters] = useState(false);
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      onSearch(event.target.value, isDisableFilters);
    }
  };

  const handleChange = event => {
    const { value } = event.target;
    setSearchText(value, isDisableFilters);
    if (value === "") {
      onSearch(value, isDisableFilters);
    }
  };

  const handleSearch = () => {
    onSearch(searchText, isDisableFilters);
  };

  const handleCheckbox = event => {
    const { checked } = event.target;
    setIsDisableFilters(checked);
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
        <label className="label checkobx">
          <input
            type="checkbox"
            checked={isDisableFilters}
            onChange={handleCheckbox}
          />
          Disable Filters
        </label>
      </div>
      <div>
        <label className="label">Filter By State</label>
        <select
          disabled={isDisableFilters}
          className="state-filter"
          onChange={event => onStateChange(event, searchText)}
        >
          {statesList.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="label">Filter by Genre</label>
        <select
          disabled={isDisableFilters}
          className="genre-filter"
          onChange={event => onGenreChange(event, searchText)}
        >
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

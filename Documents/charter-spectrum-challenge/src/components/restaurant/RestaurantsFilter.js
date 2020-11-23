import React from "react";
import "./RestaurantsFilter.css";

const RestaurantsFilter = ({
  statesList,
  onStateChange,
  genreList,
  onGenreChange
}) => {
  return (
    <div className="restaurants-filter">
      <h3 className="filter-title">Filters</h3>
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

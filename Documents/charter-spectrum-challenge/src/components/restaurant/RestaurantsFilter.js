import React from "react";
import "./RestaurantsFilter.css";

const RestaurantsFilter = ({ statesList, onStateChange }) => {
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
    </div>
  );
};

export default RestaurantsFilter;

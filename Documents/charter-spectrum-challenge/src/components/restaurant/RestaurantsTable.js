import React, { useEffect, useState } from "react";
import "./RestaurantsTable.css";

const RestaurantsTable = ({ restaurantsList }) => {
  return (
    <div className="restaurants-table-container">
      <table className="restaurants-table">
        <thead>
          <tr>
            <th>Name </th>
            <th>City</th>
            <th>State</th>
            <th>Phone Number</th>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>
          {restaurantsList.map((restaurant, index) => (
            <tr key={index}>
              <td>{restaurant.name}</td>
              <td>{restaurant.city}</td>
              <td>{restaurant.state}</td>
              <td>{restaurant.telephone}</td>
              <td>{restaurant.genre}</td>
            </tr>
          ))}
          {restaurantsList.length === 0 && (
            <tr>
              <td colSpan="5">
                <p className="no-restaurants">No restaurants found.</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsTable;

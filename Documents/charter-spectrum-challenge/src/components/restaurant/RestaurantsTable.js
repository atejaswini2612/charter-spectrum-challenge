import React, { useEffect, useState } from "react";
import "./RestaurantsTable.css";

const RestaurantsTable = ({ restaurantsList, pageSize }) => {
  const [list, setList] = useState(restaurantsList.slice(0, pageSize));
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const data = restaurantsList.slice(0, pageSize);
    setTotalPages(Math.ceil(restaurantsList.length / pageSize));
    setList(data);
  }, [restaurantsList]);

  const handlePrevious = () => {
    if (currentPage > 0) {
      let pageNo = currentPage - 1;
      const nextCount = pageNo * pageSize;
      const list = restaurantsList.slice(nextCount, nextCount + pageSize);
      setCurrentPage(pageNo);
      setList(list);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      const page = currentPage + 1;
      const nextCount = page * pageSize;
      const list = restaurantsList.slice(nextCount, nextCount + pageSize);
      setCurrentPage(page);
      setList(list);
    }
  };

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
          {list.map((restaurant, index) => (
            <tr key={index}>
              <td>{restaurant.name}</td>
              <td>{restaurant.city}</td>
              <td>{restaurant.state}</td>
              <td>{restaurant.telephone}</td>
              <td>{restaurant.genre}</td>
            </tr>
          ))}
          {list.length === 0 && (
            <tr>
              <td colSpan="5">
                <p className="no-restaurants">No restaurants found.</p>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">
              <button
                className={`${currentPage === 0 ? "disabled" : ""} prev-btn`}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className={`${
                  totalPages - 1 === currentPage ? "disabled" : ""
                } next-btn`}
                onClick={handleNext}
              >
                Next
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RestaurantsTable;

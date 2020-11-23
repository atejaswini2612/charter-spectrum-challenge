import React, { Component } from "react";
import RestaurantsTable from "../components/restaurant/RestaurantsTable";
import RestaurantsFilter from "../components/restaurant/RestaurantsFilter";
import { getRestaurants } from "../api/RestaurantsApi";
import "./RestaurantsPage.css";

class RestaurantsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsList: [],
      filteredRestaurantsList: [],
      statesList: []
    };
  }

  async componentDidMount() {
    const restaurantsList = await getRestaurants();
    restaurantsList.sort((a, b) => (a.name > b.name ? 1 : -1));
    const filteredRestaurantsList = restaurantsList;
    let statesList = [];
    restaurantsList.forEach(restaurant => {
      if (statesList.indexOf(restaurant.state) === -1) {
        statesList.push(restaurant.state);
      }
    });
    statesList.unshift("All");
    this.setState({
      restaurantsList,
      filteredRestaurantsList,
      statesList
    });
  }

  handleStateChange = event => {
    const { value } = event.target;
    let filteredRestaurantsList = [...this.state.restaurantsList];
    if (value !== "All") {
      filteredRestaurantsList = this.state.restaurantsList.filter(
        restaurant => restaurant.state === value
      );
    }
    this.setState({
      filteredRestaurantsList
    });
  };

  render() {
    const { filteredRestaurantsList, statesList } = this.state;
    return (
      <div className="restaurants-page">
        <RestaurantsFilter
          statesList={statesList}
          onStateChange={this.handleStateChange}
        />
        <RestaurantsTable restaurantsList={filteredRestaurantsList} />
      </div>
    );
  }
}

export default RestaurantsPage;

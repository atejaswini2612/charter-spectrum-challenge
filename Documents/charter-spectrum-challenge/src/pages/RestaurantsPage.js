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
      statesList: [],
      genreList: []
    };
  }

  async componentDidMount() {
    const restaurantsList = await getRestaurants();
    restaurantsList.sort((a, b) => (a.name > b.name ? 1 : -1));
    const filteredRestaurantsList = restaurantsList;
    let statesList = [],
      genreList = [];
    restaurantsList.forEach(restaurant => {
      if (statesList.indexOf(restaurant.state) === -1) {
        statesList.push(restaurant.state);
      }
      if (genreList.indexOf(restaurant.genre) === -1) {
        genreList.push(...restaurant.genre.split(","));
      }
    });
    statesList.unshift("All");
    let uniqueList = [...new Set(genreList)];
    uniqueList.unshift("All");
    this.setState({
      restaurantsList,
      filteredRestaurantsList,
      statesList,
      genreList: uniqueList
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

  handleGenreChange = event => {
    const { value } = event.target;
    let filteredRestaurantsList = [...this.state.restaurantsList];
    if (value !== "All") {
      filteredRestaurantsList = this.state.restaurantsList.filter(
        restaurant => restaurant.genre.indexOf(value) > -1
      );
    }
    this.setState({
      filteredRestaurantsList
    });
  };

  handleSearch = searchText => {
    let filteredRestaurantsList = this.state.restaurantsList.filter(
      restaurant =>
        restaurant.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
        restaurant.city.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
        restaurant.genre.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
    this.setState({
      filteredRestaurantsList
    });
  };

  render() {
    const { filteredRestaurantsList, statesList, genreList } = this.state;
    return (
      <div className="restaurants-page">
        <RestaurantsFilter
          statesList={statesList}
          onStateChange={this.handleStateChange}
          genreList={genreList}
          onGenreChange={this.handleGenreChange}
          onSearch={this.handleSearch}
        />
        <RestaurantsTable restaurantsList={filteredRestaurantsList} />
      </div>
    );
  }
}

export default RestaurantsPage;

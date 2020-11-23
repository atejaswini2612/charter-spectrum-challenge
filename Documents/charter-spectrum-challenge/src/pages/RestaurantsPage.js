import React, { Component } from "react";
import RestaurantsTable from "../components/restaurant/RestaurantsTable";
import { getRestaurants } from "../api/RestaurantsApi";

class RestaurantsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsList: []
    };
  }

  async componentDidMount() {
    const restaurantsList = await getRestaurants();
    this.setState({
      restaurantsList
    });
  }

  render() {
    const { restaurantsList } = this.state;
    return (
      <div className="restaurants-page">
        <RestaurantsTable restaurantsList={restaurantsList} />
      </div>
    );
  }
}

export default RestaurantsPage;

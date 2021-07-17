import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import Row from "../Row";
import Record from "../Record";
import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const { getPerson, getStarship, getImagePersone, getImageStarship } =
      this.swapiService;

    const personDetails = (
      <ItemDetails itemId="11" getData={getPerson} getImage={getImagePersone}>
        <Record fild="gender" label="Gender" />
        <Record fild="birthYear" label="Birth Year" />
        <Record fild="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId="5"
        getData={getStarship}
        getImage={getImageStarship}
      />
    );

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <Row left={personDetails} right={starshipDetails} />

        {/* <PeoplePage /> */}
      </div>
    );
  }
}

import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetPage, StarshipPage } from "../page";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import { ProvideSwapiService } from "../swapi-service-context";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ProvideSwapiService value={this.swapiService}>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
        </div>
      </ProvideSwapiService>
    );
  }
}

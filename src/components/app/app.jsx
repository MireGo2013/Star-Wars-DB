import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetPage, StarshipPage } from "../page";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import { ProvideSwapiService } from "../swapi-service-context";
import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";
	

export default class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ProvideSwapiService value={this.state.swapiService}>
        <BrowserRouter>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />
            <Route exact path="/" render={() => <h2>Welcome to StarDB</h2>} />
            <Route exact path="/people" render={() => <h2>People page</h2>} />
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets/:id?" component={PlanetPage} />
            <Route path="/starships/:id?" render={() => <StarshipPage />} />
          </div>
        </BrowserRouter>
      </ProvideSwapiService>
    );
  }
}

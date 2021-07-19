import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetPage, StarshipPage } from "../page";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import { ProvideSwapiService } from "../swapi-service-context";
import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";
import { StarshipDetails } from "../sw-components/Details";

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
        <BrowserRouter>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />
            <Route exact path="/" render={() => <h2>Welcome to StarDB</h2>} />
            <Route exact path="/people" render={() => <h2>People page</h2>} />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetPage} />
			<Route path="/starships" component={StarshipPage} />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                console.log(match);
                const { id } = match.params;
                return <StarshipDetails itemId={id} />;
              }}
            />
          </div>
        </BrowserRouter>
      </ProvideSwapiService>
    );
  }
}

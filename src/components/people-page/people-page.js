import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary";
import Row from "../Row";

import {
  PersonList,
  PlanetList,
  StarshipsList,
} from "../sw-components/ItemList";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components/Details";

import "./people-page.css";
export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const personList = (
      <ErrorBoundary>
        <PersonList onItemSelected={this.onItemSelected} />
      </ErrorBoundary>
    );

    const planetList = (
      <ErrorBoundary>
        <PlanetList onItemSelected={this.onItemSelected} />
      </ErrorBoundary>
    );

    const starshipList = (
      <ErrorBoundary>
        <StarshipsList onItemSelected={this.onItemSelected} />
      </ErrorBoundary>
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails itemId={this.state.selectedItem} />
      </ErrorBoundary>
    );

    const planetDetails = (
      <ErrorBoundary>
        <PlanetDetails itemId={this.state.selectedItem} />
      </ErrorBoundary>
    );

    const starshipDetails = (
      <ErrorBoundary>
        <StarshipDetails itemId={this.state.selectedItem} />
      </ErrorBoundary>
    );

    return (
      <>
        <Row left={personList} right={personDetails} />
        <Row left={planetList} right={planetDetails} />
        <Row left={starshipList} right={starshipDetails} />
      </>
    );
  }
}

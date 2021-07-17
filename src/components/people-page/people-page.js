import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import ErrorBoundary from "../ErrorBoundary";
import SwapiService from "../../services/swapi-service";
import "./people-page.css";
import Row from "../Row";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const itemList = (
      <ErrorBoundary>
        <ItemList
          onItemSelected={this.onItemSelected}
          getData={this.swapiService.getAllPeople}
        >
          {(i) => `${i.name} ${i.gender} ${i.eyeColor}`}
        </ItemList>
      </ErrorBoundary>
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundary>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}

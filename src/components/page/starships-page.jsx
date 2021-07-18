import React, { Component } from "react";
import Row from "../Row";
import { StarshipsList } from "../sw-components/ItemList";
import { StarshipDetails } from "../sw-components/Details";
import "./page.css";

export class StarshipPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row
        left={<StarshipsList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}

import React, { Component } from "react";
import Row from "../Row";
import { PlanetList } from "../sw-components/ItemList";
import { PlanetDetails } from "../sw-components/Details";
import "./page.css";

export class PlanetPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}

import React, { Component } from "react";
import Row from "../Row";
import { PersonList } from "../sw-components/ItemList";
import { PersonDetails } from "../sw-components/Details";
import "./page.css";

export class PeoplePage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={this.state.selectedItem} />}
      />

      // <Row
      //   left={<PlanetList onItemSelected={this.onItemSelected} />}
      //   right={<PlanetDetails itemId={this.state.selectedItem} />}
      // />
      // <Row
      //   left={<StarshipsList onItemSelected={this.onItemSelected} />}
      //   right={<StarshipDetails itemId={this.state.selectedItem} />}
      // />
    );
  }
}

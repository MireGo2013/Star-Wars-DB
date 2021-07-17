import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import ErrorBoundary from "../ErrorBoundary";
import SwapiService from "../../services/swapi-service";
import "./people-page.css";
import Row from "../Row";
import Record from "../Record";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  
  render() {

	const {getAllPeople, getPerson, getImagePersone } = this.swapiService
	
    const itemList = (
      <ErrorBoundary>
        <ItemList
          onItemSelected={this.onItemSelected}
          getData={getAllPeople}
        >
          {(i) => `${i.name} ${i.gender} ${i.eyeColor}`}
        </ItemList>
      </ErrorBoundary>
    );

	const itemDetails = (
		<ItemDetails
		  itemId={this.state.selectedItem}
		  getData={getPerson}
		  getImage={getImagePersone}
		>
		  <Record fild="gender" label="Gender" />
		  <Record fild="birthYear" label="Birth Year" />
		  <Record fild="eyeColor" label="Eye Color" />
		</ItemDetails>
	  );

    const personDetails = (
      <ErrorBoundary>
        {itemDetails}
      </ErrorBoundary>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}

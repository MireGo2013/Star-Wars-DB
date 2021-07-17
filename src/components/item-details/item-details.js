import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    itemDetails: null,
	loading: true,
	error: false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
		this.setState({
			loading: true
		})
      this.updatePerson();
    }
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePerson() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }

    this.swapiService
      .getPerson(itemId)
      .then((itemDetails) => {
        this.setState({ 
			itemDetails,
			loading: false
		 });
      })
	  .catch(this.onError);
  }

  render() {

    const { itemDetails, loading, error } = this.state;
    if (!itemDetails) {
      return <span>Select a person from a list</span>;
    }

	if (loading) {
		return <Spinner/>
	}

	if (error) {
		return <ErrorIndicator/>
	}

    const { id, name, gender, birthYear, eyeColor } = itemDetails;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="character"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}

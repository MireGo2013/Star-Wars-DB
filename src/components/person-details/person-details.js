import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
	loading: true,
	error: false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
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
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({ 
			person,
			loading: false
		 });
      })
	  .catch(this.onError);
  }

  render() {

    const { person, loading, error } = this.state;
    if (!person) {
      return <span>Select a person from a list</span>;
    }

	if (loading) {
		return <Spinner/>
	}

	if (error) {
		return <ErrorIndicator/>
	}

    const { id, name, gender, birthYear, eyeColor } = person;

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

import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
    error: false,
    loading: true,
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList,
          loading: false,
        });
      })
      .catch(this.onError);
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList, loading, error } = this.state;

	
    if (error) {
		return <ErrorIndicator />;
    }
	
	

    const items = this.renderItems(peopleList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}

import React, { Component } from "react";

import "./item-list.css";

import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {
  

  state = {
    itemList: null,
    error: false,
    loading: true,
  };

  onError = (err) => {
	  console.log(err)
    this.setState({
      error: true,
      loading: false,
    });
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList,
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
    const { itemList, loading, error } = this.state;

    if (error) {
		console.log(error)
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}

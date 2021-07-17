import React, { Component } from "react";
import WithData from "../hoc";
import SwapiService from "../../services/swapi-service";
import "./item-list.css";

let ItemList = (props) => {
  const data = props.data;
  const items = data.map((item) => {
    const { id } = item;
    const label = props.children(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => props.onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

const swapiService = new SwapiService();

export default WithData(ItemList, swapiService.getAllPeople);

import React from "react";
import { withRouter } from "react-router-dom";
import Row from "../Row";
import { StarshipDetails } from "../sw-components/Details";
import { StarshipsList } from "../sw-components/ItemList";
import "./page.css";

const StarshipPage = (props) => {
  const { id } = props.match.params;
  return (
    <Row
      left={
        <StarshipsList
          onItemSelected={(itemId) => props.history.push(itemId)}
        />
      }
      right={<StarshipDetails itemId={id} />}
    />
  );
};

export default withRouter(StarshipPage);

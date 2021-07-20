import React from "react";
import Row from "../Row";
import { PlanetList } from "../sw-components/ItemList";
import { PlanetDetails } from "../sw-components/Details";
import "./page.css";
import { withRouter } from "react-router-dom";

const PlanetPage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Row
      left={<PlanetList onItemSelected={(itemId) => history.push(itemId)} />}
      right={<PlanetDetails itemId={id} />}
    />
  );
};

export default withRouter(PlanetPage);

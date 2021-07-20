import React from "react";
import Row from "../Row";
import { PersonList } from "../sw-components/ItemList";
import { PersonDetails } from "../sw-components/Details";
import { withRouter } from "react-router-dom";
import "./page.css";

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Row
      left={<PersonList onItemSelected={(itemId) => history.push(itemId)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);

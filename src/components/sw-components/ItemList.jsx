import ItemList from "../item-list/item-list";
import { withConsumerSwapiService, withChild, withData } from "./../hoc";

const renderList = ({ name }) => `${name}`;

const mapMethodsToPropsPersonList = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapMethodsToPropsPlanetList = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapMethodsToPropsStarshipsList = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

export const PersonList = withConsumerSwapiService(
  withData(withChild(ItemList, renderList)),
  mapMethodsToPropsPersonList
);

export const PlanetList = withConsumerSwapiService(
  withData(withChild(ItemList, renderList)),
  mapMethodsToPropsPlanetList
);

export const StarshipsList = withConsumerSwapiService(
  withData(withChild(ItemList, renderList)),
  mapMethodsToPropsStarshipsList
);

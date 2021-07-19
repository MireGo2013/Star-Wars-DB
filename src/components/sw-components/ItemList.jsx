import ItemList from "../item-list/item-list";
import {
  withConsumerSwapiService,
  withChild,
  withData,
  compose,
} from "./../hoc";

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

export const PersonList = compose(
  withConsumerSwapiService(mapMethodsToPropsPersonList),
  withData,
  withChild(renderList)
)(ItemList);

export const PlanetList = compose(
  withConsumerSwapiService(mapMethodsToPropsPlanetList),
  withData,
  withData,
  withChild(renderList)
)(ItemList);

export const StarshipsList = compose(
  withConsumerSwapiService(mapMethodsToPropsStarshipsList),
  withData,
  withData,
  withChild(renderList)
)(ItemList);

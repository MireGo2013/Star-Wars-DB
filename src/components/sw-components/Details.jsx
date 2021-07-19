import React from "react";
import Record from "../Record";
import itemDetails from "../item-details/item-details";
import {
  withChild,
  withConsumerSwapiService,
  withDetails,
  compose,
} from "../hoc";

const recordPerson = [
  <Record fild="gender" label="Gender" />,
  <Record fild="birthYear" label="Birth Year" />,
  <Record fild="eyeColor" label="Eye Color" />,
];

const recordPlanet = [
  <Record fild="diameter" label="Diameter" />,
  <Record fild="gravity" label="Gravity" />,
  <Record fild="orbitalPeriod" label="Orbital Period" />,
  <Record fild="population" label="Population" />,
  <Record fild="terrain" label="Terrain" />,
  <Record fild="climate" label="Climate" />,
  <Record fild="rotationPeriod" label="Rotation Period" />,
];

const recordStarship = [
  <Record fild="model" label="Model" />,
  <Record fild="manufacturer" label="Manufacturer" />,
  <Record fild="costInCredits" label="Cost In Credits" />,
  <Record fild="length" label="Length" />,
  <Record fild="crew" label="Crew" />,
  <Record fild="passengers" label="Passengers" />,
  <Record fild="cargoCapacity" label="Cargo Capacity" />,
];

const mapMethodsToPropsPersonDetails = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImage: swapiService.getImagePerson,
  };
};

const mapMethodsToPropsPlanetDetails = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImage: swapiService.getImagePlanet,
  };
};

const mapMethodsToPropsStarshipDetails = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImage: swapiService.getImageStarship,
  };
};

export const PersonDetails = compose(
  withConsumerSwapiService(mapMethodsToPropsPersonDetails),
  withDetails,
  withChild(recordPerson)
)(itemDetails);

export const PlanetDetails = compose(
  withConsumerSwapiService(mapMethodsToPropsPlanetDetails),
  withDetails,
  withChild(recordPlanet)
)(itemDetails);

export const StarshipDetails = compose(
  withConsumerSwapiService(mapMethodsToPropsStarshipDetails),
  withDetails,
  withChild(recordStarship)
)(itemDetails);

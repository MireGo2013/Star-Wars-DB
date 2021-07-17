import React from "react";
import Record from "../Record";
import SwapiService from "../../services/swapi-service";
import WithDetails from "../hoc/withDetails/WithDetails";
import itemDetails from "../item-details/item-details";

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getImagePerson,
  getImagePlanet,
  getImageStarship,
} = swapiService;

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

const withChild = (WrapperComponent, recordDetails) => {
  return (props) => {
    return <WrapperComponent {...props}>{recordDetails}</WrapperComponent>;
  };
};

export const PersonDetails = WithDetails(
  withChild(itemDetails, recordPerson),
  getPerson,
  getImagePerson
);

export const PlanetDetails = WithDetails(
  withChild(itemDetails, recordPlanet),
  getPlanet,
  getImagePlanet
);
export const StarshipDetails = WithDetails(
  withChild(itemDetails, recordStarship),
  getStarship,
  getImageStarship
);

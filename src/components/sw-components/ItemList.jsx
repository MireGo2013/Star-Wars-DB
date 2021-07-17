import WithData from "../hoc/withData";
import ItemList from "../item-list/item-list";
import { ConsumerSwapiService } from "../swapi-service-context";

const withChild = (WrapperComponent, childFn) => {
  return (props) => {
    return <WrapperComponent {...props}>{childFn}</WrapperComponent>;
  };
};

const renderList = ({ name }) => `${name}`;

const withConsumerSwapiService = (WrapperComponent, fn) => {
  return (props) => {
    return (
      <ConsumerSwapiService>
        {(swapiService) => {
          const swapiServiceProps = fn(swapiService);
          return <WrapperComponent {...props} {...swapiServiceProps} />;
        }}
      </ConsumerSwapiService>
    );
  };
};

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
  WithData(withChild(ItemList, renderList)),
  mapMethodsToPropsPersonList
);

export const PlanetList = withConsumerSwapiService(
  WithData(withChild(ItemList, renderList)),
  mapMethodsToPropsPlanetList
);

export const StarshipsList = withConsumerSwapiService(
  WithData(withChild(ItemList, renderList)),
  mapMethodsToPropsStarshipsList
);

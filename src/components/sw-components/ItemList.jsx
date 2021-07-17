import WithData from "../hoc/withData";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildCompositionHoc = (WrapperComponent, childFn) => {
  return (props) => {
    return <WrapperComponent {...props}>{childFn}</WrapperComponent>;
  };
};

const renderList = ({ name }) => `${name}`;

export const PersonList = WithData(
  withChildCompositionHoc(ItemList, renderList),
  getAllPeople
);

export const PlanetList = WithData(
  withChildCompositionHoc(ItemList, renderList),
  getAllPlanets
);

export const StarshipsList = WithData(
  withChildCompositionHoc(ItemList, renderList),
  getAllStarships
);

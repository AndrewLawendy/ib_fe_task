import { filterHighlight } from "./filterHighlight";

const filtersModule = angular.module("appModule.filters", [
  filterHighlight.name,
]);

export default filtersModule;

angular.module('appModule').controller('homeController', homePageController);

function homePageController(Employees, $scope, $stateParams, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.filter = $stateParams.filter;

  homePageVm.$onInit = function () {
    homePageVm.activate();
  };

  homePageVm.activate = function () {
    Employees.getEmployees().then(({ data }) => {
      homePageVm.employees = homePageVm.employees.concat(data.employees);
    });
  };

  /**
   *
   * @param {string} filter
   */
  homePageVm.updateFilter = function (filter) {
    homePageVm.filter = filter;
    $location.search({ filter });
    $scope.$apply();
  };
}

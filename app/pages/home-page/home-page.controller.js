angular.module('appModule').controller('homeController', homePageController);

function homePageController(Employees, $scope) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.search = '';

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
   * @param {string} search
   */
  homePageVm.updateSearch = function (search) {
    homePageVm.search = search;
    $scope.$apply();
  };
}

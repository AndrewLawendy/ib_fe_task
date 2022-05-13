angular.module("appModule").controller("homeController", homePageController);

function homePageController(Employees, $scope, $stateParams, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.filter = $stateParams.filter;
  homePageVm.isFetchingEmployees = false;
  homePageVm.listingParams = {
    page: 1,
  };
  homePageVm.canLoadMoreEmployees = true;

  homePageVm.$onInit = function () {
    homePageVm.activate();
  };

  homePageVm.activate = function () {
    homePageVm.getEmployees(homePageVm.listingParams);
  };

  homePageVm.loadMoreEmployees = function () {
    homePageVm.listingParams.page++;
    homePageVm.getEmployees(homePageVm.listingParams);
  };

  /**
   *
   * @param {Object} params
   * @param {number} params.page
   */
  homePageVm.getEmployees = function (params) {
    homePageVm.isFetchingEmployees = true;

    Employees.getEmployees(params)
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        homePageVm.canLoadMoreEmployees = data.current_page !== data.pages;
      })
      .finally(() => {
        homePageVm.isFetchingEmployees = false;
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

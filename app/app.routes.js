angular
  .module("appModule")
  .config(function ($locationProvider) {
    "ngInject";

    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    "ngInject";

    $stateProvider
      .state({
        name: "app",
        url: "/?filter",
        templateUrl: "./pages/home-page/home-page.html",
        controller: "homeController",
        controllerAs: "homePageVm",
        reloadOnSearch: false,
      })
      .state({
        name: "team-performance",
        url: "/team-performance",
        template: "<v-performance-page></v-performance-page>",
      })
      .state({
        name: "not-found",
        template: "<v-not-found></v-not-found>",
      });

    $urlRouterProvider.otherwise(function ($injector) {
      const $state = $injector.get("$state");
      $state.go("not-found");
    });
  });

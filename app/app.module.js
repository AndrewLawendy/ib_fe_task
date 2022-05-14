import Vue from "vue";
import "ngVue";
import "ngVue/build/plugins.js";

import filtersModule from "./filters";

import PerformancePageComponent from "./pages/performance-page.vue";
import PerformanceChartComponent from "./components/vue-components/performance-chart.vue";
import EmployeesFilterComponent from "./components/vue-components/employees-filter.vue";
import NotFoundComponent from "./components/vue-components/not-found.vue";

const app = angular.module("appModule", [
  "ui.router",
  "ngVue",
  "ngVue.plugins",
  filtersModule.name,
]);

angular
  .module("appModule")
  .directive("vPerformancePage", (createVueComponent) => {
    "ngInject";

    return createVueComponent(
      Vue.component("performancePageComponent", PerformancePageComponent)
    );
  });

angular
  .module("appModule")
  .directive("vPerformanceChart", (createVueComponent) => {
    "ngInject";

    return createVueComponent(
      Vue.component("performanceChartComponent", PerformanceChartComponent)
    );
  });

angular.module("appModule").directive("vNotFound", (createVueComponent) => {
  "ngInject";

  return createVueComponent(
    Vue.component("notFoundComponent", NotFoundComponent)
  );
});

app.value("EmployeesFilter", EmployeesFilterComponent);

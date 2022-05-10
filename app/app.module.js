import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';

import filtersModule from './filters';

import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import EmployeesFilterComponent from './components/vue-components/employees-filter.vue';

const app = angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
  filtersModule.name,
]);

angular
  .module('appModule')
  .directive('vPerformancePage', (createVueComponent) => {
    return createVueComponent(
      Vue.component('performancePageComponent', PerformancePageComponent)
    );
  });

angular
  .module('appModule')
  .directive('vPerformanceChart', (createVueComponent) => {
    return createVueComponent(
      Vue.component('performanceChartComponent', PerformanceChartComponent)
    );
  });

app.value('EmployeesFilter', EmployeesFilterComponent);

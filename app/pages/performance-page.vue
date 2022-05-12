<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <performance-filter-component />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";

import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import PerformanceFilterComponent from "../components/vue-components/performance-filter.vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      chartData: [],
    };
  },
  mutations: {
    updateChartData(state, data) {
      state.chartData = data;
    },
  },
});

export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    PerformanceFilterComponent,
  },

  store,
};
</script>

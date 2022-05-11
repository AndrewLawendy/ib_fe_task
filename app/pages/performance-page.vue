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
import PerformanceChartComponent from '../components/vue-components/performance-chart.vue';
import PerformanceFilterComponent from '../components/vue-components/performance-filter.vue';
export default {
  name: 'AboutPageComponent',
  components: {
    PerformanceChartComponent,
    PerformanceFilterComponent,
  },
};
</script>

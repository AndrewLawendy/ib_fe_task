<template>
  <div>
    <div class="c-filters__dates">
      <div>
        <label>Start Date</label>
        <input type="date" v-model="startDate" @input="onDateChange" />
      </div>

      <div>
        <label>End Date</label>
        <input type="date" v-model="endDate" @input="onDateChange" />
      </div>
    </div>

    <p v-if="invalidRange" key="invalid-date-range" class="c-range_error">
      Start Date cannot be after End Date
    </p>
  </div>
</template>

<script>
import moment from "moment";

import { getChart } from "../../services/vue-services/getChart";

let initialChartData;

export default {
  name: "PerformanceFilter",

  data() {
    return {
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
      invalidRange: false,
    };
  },

  mounted() {
    this.getChartData();
  },

  methods: {
    getChartData() {
      const _this = this;

      getChart("https://fe-task.getsandbox.com/performance").then(
        (response) => {
          initialChartData = response;
          _this.$store.commit("updateChartData", response);
        }
      );
    },

    filterChartData({ startDate, endDate }) {
      const filteredData = initialChartData.filter(({ date_ms }) => {
        return date_ms >= startDate && date_ms <= endDate;
      });

      this.$store.commit("updateChartData", filteredData);
    },

    onDateChange() {
      if (moment(this.startDate).isSameOrAfter(this.endDate)) {
        this.invalidRange = true;
      } else {
        this.invalidRange = false;

        this.filterChartData({
          startDate: new Date(this.startDate),
          endDate: new Date(this.endDate),
        });
      }
    },
  },
};
</script>

<style></style>

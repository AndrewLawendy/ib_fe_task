<template>
  <fragment>
    <div>
      <label>Start Date</label>
      <input type="date" v-model="startDate" @input="getData" />
    </div>

    <div>
      <label>End Date</label>
      <input type="date" v-model="endDate" @input="getData" />
    </div>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import moment from 'moment';

export default {
  name: 'PerformanceFilter',
  components: { Fragment },

  data() {
    return {
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    };
  },

  methods: {
    getData() {
      console.log(this.startDate, '<---->', this.endDate);
    },
  },
};
</script>

<style></style>

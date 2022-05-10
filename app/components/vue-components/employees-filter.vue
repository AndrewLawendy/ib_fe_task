<template>
  <div class="c-users-filter">
    <input v-model="filter" v-on:input="handleChange" />
    <button class="c-button" v-on:click="clear">Clear</button>
  </div>
</template>

<script>
export default {
  name: 'EmployeesFilterComponent',
  props: {
    update: Function,
  },

  data() {
    return {
      filter: '',
    };
  },

  methods: {
    clear() {
      this.filter = '';
    },

    handleChange() {
      this.update(this.filter);
    },
  },
};
</script>

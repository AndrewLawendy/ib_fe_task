<template>
  <div class="c-users-filter">
    <input v-model="filterInput" v-on:input="handleChange" />
    <button class="c-button" v-on:click="clear">Clear</button>
  </div>
</template>

<script>
export default {
  name: "EmployeesFilterComponent",
  props: {
    update: Function,
    filter: String,
  },

  data() {
    return {
      filterInput: this.filter,
    };
  },

  methods: {
    clear() {
      this.filterInput = "";
      this.update();
    },

    handleChange() {
      this.update(this.filterInput || undefined);
    },
  },
};
</script>

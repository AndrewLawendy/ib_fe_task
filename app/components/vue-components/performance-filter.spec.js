import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import PerformanceFilterComponent from "./performance-filter.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Performance Filter", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      updateChartData: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it("should update store if date is valid", async () => {
    const wrapper = shallowMount(PerformanceFilterComponent, {
      store,
      localVue,
    });
    const date = wrapper.find("input");
    date.element.value = "2022-01-11";
    await date.trigger("input");

    expect(mutations.updateChartData).toHaveBeenCalled();
  });

  it("should not update store if date is invalid", async () => {
    const wrapper = shallowMount(PerformanceFilterComponent, {
      store,
      localVue,
    });
    const date = wrapper.find("input");
    await date.trigger("input");

    expect(mutations.updateChartData).not.toHaveBeenCalled();
  });
});

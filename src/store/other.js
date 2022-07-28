import { defineStore } from 'pinia';

export const useOtherStore = defineStore({
  id: 'other',
  state: () => {
    return {
      name: '',
      counter: 2,
      isAdmin: false,
    };
  },
  getters: {
    doubleCounter: (state) => {
      return state.counter * 2;
    },
  },
  actions: {},
});

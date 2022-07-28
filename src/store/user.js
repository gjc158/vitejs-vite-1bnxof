import { defineStore } from 'pinia';
import { useOtherStore } from './other';

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '',
      counter: 0,
      isAdmin: false,
      userData: null,
    };
  },
  // 持久化
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ['counter', 'userData'] }],
  },
  getters: {
    doubleCounter: (state) => {
      return state.counter * 2;
    },
    addOtherCounter: (state) => {
      const otherStore = useOtherStore();
      return state.counter + otherStore.counter;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    randomCounter() {
      this.counter = Math.round(Math.random() * 100);
    },
    // 同步请求方法
    // async registerUser(login, password) {
    //   try {
    //     this.userData = await api.post({ login, password })
    //     showTooltip(`Welcome back ${this.userData.name}!`)
    //   } catch (error) {
    //     showTooltip(error)
    //     // 让表单组件显示错误
    //     return error
    //   }
    // },
  },
});

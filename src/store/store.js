// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    userName: '', // Initialize an empty string for the user's name
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name; // Update the user's name in the state
    },
  },
  // ...other Vuex store configurations
});

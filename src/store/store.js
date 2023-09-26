import { createStore } from 'vuex';

export default createStore({
  state: {
    recipes: [], 
  },
  mutations: {
    setRecipes(state, recipes) {
      state.recipes = recipes; 
    },
  },
  actions: {
    async fetchRecipes({ commit }) {
      try {
        const response = await fetch('@/Recipes/recipe-detail-data.json');
        const data = await response.json();
        
        commit('setRecipes', data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    },
  },
});

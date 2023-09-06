import { createRouter, createWebHashHistory } from 'vue-router'; // Import the functions from vue-router

import InputPage from '@/views/InputPage.vue';
import HomePage from '@/views/HomePage.vue';

// Create the router instance
const router = createRouter({
  history: createWebHashHistory(), // You can use createWebHistory() for non-hash mode
  routes: [
    {
      path: '/',
      component: HomePage,
      props: true,
    },
    {
      path: '/input',
      component: InputPage,
    },
  ],
});

// No need to use Vue.use(VueRouter) with Vue 3

export default router; // Export the router instance

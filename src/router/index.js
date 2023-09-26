import { createRouter, createWebHashHistory } from 'vue-router'; 

import InputPage from '@/components/InputPage.vue';
import HomePage from '@/components/HomePage.vue';
import YourRecipesPage from '@/components/YourRecipesPage.vue';
import RecipeDetail from '@/components/RecipeDetail.vue';
import ExplorePage from '@/components/ExplorePage.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import DataPage from '@/components/DataPage.vue';
import '@/components/HomePageStyles.css';

const router = createRouter({
  history: createWebHashHistory(), 
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
    {
      path: '/YourRecipesPage',
      component: YourRecipesPage,
    },
    {
      path: '/ExplorePage',
      component: ExplorePage,
    },
    {
      path: '/ProfilePage',
      component: ProfilePage,
    },
    {
      path: '/DataPage',
      component: DataPage,
    },
    {
      path: '/recipes/:id',
      name: 'recipe-detail',
      component: RecipeDetail,
      props: true, 
    }
  ],
});


export default router; 
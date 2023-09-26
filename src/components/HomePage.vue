<template>
    <div>
    <RecipeofDay />
    </div>

    <div>
      <RecipeCarousel/>
    </div>

    <div>
    <CookingSkills />
    </div>


    <!-- Top Articles Section -->
    <div class="section">
      <h2 class="section-title">Top Articles</h2>
      <p class="section-subtitle">Latest news from your fellow chefs</p>
    </div>
    <div class="articles">
      <!-- Box 1 -->
      <router-link to="/new-cooking-techniques" class="article-box">
        <h3 class="article-title">New Cooking Techniques</h3>
        <p>Explore the latest trends in cooking techniques and elevate your culinary skills to the next level...</p>
      </router-link>

      <!-- Box 2 -->
      <router-link to="/recipe-inspiration" class="article-box">
        <h3 class="article-title">Recipe Inspiration</h3>
        <p>Find mouthwatering recipes and get inspired to create delicious dishes for your next meal...</p>
      </router-link>

      <!-- Box 3 -->
      <router-link to="/healthy-eating" class="article-box">
        <h3 class="article-title">Healthy Eating</h3>
        <p>Discover the secrets to maintaining a balanced and nutritious diet while savoring tasty and wholesome foods...</p>
      </router-link>

      <!-- Box 4 -->
      <router-link to="/cooking-tips" class="article-box">
        <h3 class="article-title">Cooking Tips</h3>
        <p>Learn essential cooking tips and tricks from seasoned chefs to enhance your culinary expertise...</p>
      </router-link>
    </div>


    <!-- Featured Chef Section -->
    <div class="section">
      <h2 class="section-title">Featured Chefs</h2>
      <p class="section-subtitle">Your favorite chefs who have inspired you</p>
      <div class="featured-chefs">
        <!-- Featured Chef Cards -->
        <div class="chef-card">
          <img src="/assets/boyardee.jpg" alt="Chef 1" class="chef-image">
          <h3 class="chef-name">Chef Boyardee</h3>
          <p class="chef-description">Renowned for Italian cuisine</p>
        </div>
        <div class="chef-card">
          <img src="/assets/john.jpg" alt="Chef 2" class="chef-image">
          <h3 class="chef-name">Chef American John</h3>
          <p class="chef-description">Master of Asian flavors</p>
        </div>
        <div class="chef-card">
          <img src="/assets/biden.jpg" alt="Chef 3" class="chef-image">
          <h3 class="chef-name">Chef Poutine</h3>
          <p class="chef-description">Mexican culinary expert</p>
        </div>
        <div class="chef-card">
        <img src="/assets/ramse.jpg" alt="Chef 4" class="chef-image">
        <h3 class="chef-name">Chef Gourdone Ramseis</h3>
        <p class="chef-description">Expert in French cuisine</p>
        </div>
      </div>
    </div>
</template>

<script>
import CookingSkills from '@/components/CookingSkills.vue'; 
import RecipeofDay from '@/components/RecipeofDay.vue';
import RecipeCarousel from '@/components/RecipeCarousel.vue';

export default {
  components: {
    CookingSkills, 
    RecipeofDay,
    RecipeCarousel,
  },
};
</script>

<link rel="stylesheet" href="./components/HomePageStyles.css">



<template>
    <div>
      <h1 class="portfolio-title">Your Recipes</h1>
      <p class="subtitle">View your recipe portfolio</p>
      <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="(recipe, index) in recipes" :key="index">
          <router-link :to="getRecipeDetailLink(recipe.id)" class="carousel-link">
            <div class="carousel__item">
              <img :src="recipe.imageUrl" alt="Recipe Image" class="carousel-image" />
              <h2 class="recipe-title">{{ recipe.title }}</h2>
            </div>
          </router-link>
        </Slide>
      </Carousel>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'RecipeCarousel',
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        recipes: [],
      };
    },
    mounted() {
      this.loadRecipes();
    },
    methods: {
      async loadRecipes() {
        try {

          const response = await import('@/components/recipe-detail-data.json');
          this.recipes = response.default;
          console.log(this.recipes);
        } catch (error) {
          console.error('Error loading JSON data:', error);
        }
      },
      getRecipeDetailLink(recipeId) {
        return `/recipes/${recipeId}`;
      },
    },
  });
  </script>
  
  <style scoped>
  .portfolio-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .subtitle {
    text-align: center;
    font-size: 18px;
    color: #666;
  }
  
  .carousel-image {
    max-width: 100%;
    max-height: 300px;
  }
  
  .recipe-title {
    color: black;
  }
  
  .carousel-link {
    text-decoration: none; 
    border: 1px solid #ccc; 
    display: inline-block; 
    margin: 10px; 
    border-radius: 5px; 
    overflow: hidden;
  }
  </style>
  
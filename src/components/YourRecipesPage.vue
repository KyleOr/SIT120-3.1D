<template>
    <div style="margin-top: 210px;">
      <h1>Your Recipes</h1>
      <div class="recipe-list">
        <div
          v-for="recipe in recipes"
          :key="recipe.id"
          class="recipe-item"
          @click="navigateToRecipe(recipe.id)"
        >
          <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
          <h2>{{ recipe.title }}</h2>
          <p>{{ recipe.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import recipeData from '@/components/recipe-detail-data.json'
  
  export default {
    data() {
      return {
        recipes: recipeData
      }
    },
    methods: {
      navigateToRecipe(id) {
        this.$router.push({ name: 'recipe-detail', params: { id } });
      }
    }
  }
  </script>
  
  <style scoped>
  .recipe-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  
  .recipe-item {
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 20px;
    transition: transform 0.2s ease-in-out;
  }
  
  .recipe-item:hover {
    transform: scale(1.05);
  }
  
  .recipe-image {
    max-width: 100%;
    max-height: 150px; 
  }
  </style>
  
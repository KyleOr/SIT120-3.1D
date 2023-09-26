<template>
    <div class="section" style="margin-top: 200px;">
      <h2 class="section-title">Recipe of the Day</h2>
      <p class="section-subtitle">Maybe try this recipe today?</p>
      <div class="recipe-card-big">
        <router-link v-if="selectedRecipe" :to="recipeDetailLink">
          <div class="recipe-card-big">
            <div class="recipe-image-container">
              <img :src="selectedRecipe.imageUrl" alt="Recipe Image" class="recipe-image" />
            </div>
            <div class="recipe-title-container">
              <h2 class="recipe-title">{{ selectedRecipe.title }}</h2>
            </div>
          </div>
        </router-link>
        <div v-else>
          <p>No recipes available.</p>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  
  export default {
    components: {
    },
    data() {
      return {
        recipesData: [], 
      };
    },
    computed: {
      randomRecipeIndex() {
        return Math.floor(Math.random() * this.recipesData.length);
      },
      selectedRecipe() {
        if (this.recipesData.length === 0) {
          return null; 
        }
        return this.recipesData[this.randomRecipeIndex];
      },
      recipeDetailLink() {
        if (this.selectedRecipe) {
          return `/recipes/${this.selectedRecipe.id}`;
        }
        return '';
      },
    },
    mounted() {
      this.loadRecipesData();
    },
    methods: {
      async loadRecipesData() {
        try {
          // Import the JSON data dynamically
          const response = await import('@/components/recipe-detail-data.json');
          this.recipesData = response.default;
        } catch (error) {
          console.error('Error loading JSON data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .recipe-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff; 
    padding: 10px; 
    border: 1px solid #ccc;
    border-radius: 5px;
    max-width: 300px;
    margin: 0 auto; 
  }
  
  .recipe-image-container {
    overflow: hidden;
    max-height: 50%; 
    text-align: center;
  }
  
  .recipe-image {
    width: auto;
    height: 50%;
    max-width: 100%; 
  }
  
  .recipe-title-container {
    background-color: #fff; 
    padding: 10px;
    margin-top: 10px; 
    text-align: center;
  }
  
  .recipe-title {
    margin: 0;
    color: rgb(0, 0, 0);
    text-decoration: none; 
  }
  </style>
  
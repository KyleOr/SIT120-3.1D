<template>
  <div class="recipe-detail" style="margin-top: 50px;" v-if="recipe">
    <v-img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image"></v-img>
    
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="pa-3">
            <v-avatar size="48" @mouseover="profileCardExpanded = true" @mouseleave="profileCardExpanded = false">
              <img :src="recipe.user.avatar" alt="User Avatar" />
            </v-avatar>
            <v-expand-transition>
              <div v-if="profileCardExpanded">
                <h3 class="section-title">{{ recipe.user.username }}</h3>
                <p class="user-info">{{ recipe.user.name }}</p>
              </div>
            </v-expand-transition>
            
            <h3 class="section-title">Ingredients</h3>
            <ul class="ingredient-list">
              <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="8">
          <v-card class="pa-3">
            <v-divider></v-divider>
            <v-card-title class="recipe-title">{{ recipe.title }}</v-card-title>
            <v-card-text class="recipe-description">{{ recipe.description }}</v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-col>  
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
</template>

<script>
import recipeData from './recipe-detail-data.json';

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      recipe: null,
      profileCardExpanded: false
    };
  },
  created() {
    const id = this.$route.params.id; 
    this.recipe = recipeData.find(recipe => recipe.id === Number(id));
  },
};
</script>

<style scoped>

.recipe-detail {
  text-align: center;
  padding: 20px;
}

.recipe-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.recipe-title {
  font-size: 24px;
  margin-top: 20px;
}

.recipe-description {
  font-size: 16px;
  margin-top: 10px;
  color: #777;
}

.section-title {
  font-size: 20px;
  margin-top: 20px;
}

.ingredient-list {
  list-style-type: disc;
  margin-left: 20px;
  font-size: 16px;
}

.user-info {
  font-size: 16px;
  margin-top: 5px;
}
</style>

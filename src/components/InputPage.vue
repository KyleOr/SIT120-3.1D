<template>
    <div class="container" style="margin-top: 200px;"> 
      <form @submit.prevent="submitRecipe" class="recipe-form">
        <h2 class="section-title">Create a Recipe</h2>
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="recipe.title" required>
        </div>
        <div class="form-group">
          <label for="imageURL">Image URL:</label>
          <input type="url" id="imageURL" v-model="recipe.imageURL" required>
        </div>
        <div class="form-group">
          <label for="ingredients">Ingredients:</label>
          <textarea id="ingredients" v-model="recipe.ingredients" rows="4" required placeholder="Add ingredient and press Enter"></textarea>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="recipe.description" rows="4" required></textarea>
        </div>
        <button class="submit-button" type="submit">Save & Exit</button>
        <button class="exit-button" @click="exitWithoutSaving">Exit</button>
      </form>
    </div>
  </template>
  
<!--This inputpage worked in the previous version, until I added the json file to populate page. I do not know how to dynamically update a json file-->

  <script>
  import { mapMutations } from 'vuex';
  
  export default {
    data() {
      return {
        recipe: {
          title: '',
          imageURL: '',
          ingredients: '',
          description: '',
        },
      };
    },
    methods: {
      submitRecipe() {

        this.addRecipe(this.recipe);
  
        
        this.$router.push('/');
      },
      exitWithoutSaving() {

        this.$router.push('/');
      },
      ...mapMutations(['addRecipe']), 
    },
  };
  </script>
  
  <style scoped>
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .recipe-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  .form-group {
    margin-top: 20px;
  }
  
  input[placeholder='Add ingredient and press Enter'] {
    width: 100%;
    margin-top: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  input[type="text"],
  input[type="url"],
  select,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .submit-button {
    background-color: #ffffff;
    color: #000000;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .exit-button {
    background-color: #ffffff;
    color: #000000;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
  }
  
  .submit-button:hover {
    background-color: #ebebeb;
  }
  
  .exit-button:hover {
    background-color: #ebebeb;
  }
  </style>
  
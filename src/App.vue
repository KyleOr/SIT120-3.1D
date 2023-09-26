<template>
  <div>
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-container">
          <router-link to="/" class="navbar-logo">
            <h1 class="title">The Recipe Book</h1>
          </router-link>
          <div class="navbar-links">
            <router-link to="/YourRecipesPage" class="navbar-item">Your Recipes</router-link>
            <router-link to="/ExplorePage" class="navbar-item">Explore</router-link>
            <router-link to="/ProfilePage" class="navbar-item">Profile</router-link>
            <router-link to="/DataPage" class="navbar-item">Dataset</router-link>
            <router-link to="/input" class="navbar-item">Add Recipe</router-link>
          </div>
          <div class="navbar-right">
            <div class="navbar-item search-bar">
              <input type="text" v-model="searchQuery" @input="performSearch" placeholder="Search for recipes">
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Transition Wrapper -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-content">
        <div class="contact-info">
          <p>Contact us: TheRecipeBook@Recipemail.com | Phone: (123) 456-7890</p>
        </div>
        <div class="copyright">
          <p>&copy; 2023 The Recipe Book. All Rights Reserved.</p>
        </div>
        <div class="social-icons">
          <!-- Add social media icons and links here -->
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    performSearch() {
      // Implement search function
      // Use this.searchQuery to get the user's input later
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.navbar {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.navbar-logo {
  text-decoration: none;
  color: #333;
  font-size: 24px;
  font-weight: bold;
}

.navbar-links {
  display: flex;
  align-items: center;
}

.navbar-item {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-right: 20px;
  padding: 10px;
  transition: color 0.3s;
}

.navbar-item:hover {
  color: #007BFF; 
}


.search-bar input[type="text"] {
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  transition: background-color 0.3s; 
}

.search-bar input[type="text"]:hover {
  background-color: #f2f2f2; 
}


.footer {
  background-color: #fff;
  color: #333;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #ccc;
}

.footer p {
  font-weight: bold;
}


.social-icons {
  margin-top: 10px;
}

.social-icons a {
  margin-right: 10px;
  color: #333;
  font-size: 24px;
  transition: color 0.3s; 
}


.social-icons a:hover {
  color: #007BFF;
}
</style>
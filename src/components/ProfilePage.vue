<template>
      <div class="profile-page" style="margin-top: 200px;">
      <img class="profile-picture" :src="user.profilePicture" :alt="user.name" />
  
      <!-- User Information -->
      <div class="user-info">
        <h1>{{ user.name }}</h1>
        <p class="bio">{{ user.bio }}</p>
  
        <!-- Profile Information -->
        <div class="profile-details">
          <div class="profile-detail">
            <span class="label">Email:</span>
            <span class="value">{{ user.email }}</span>
          </div>
          <div class="profile-detail">
            <span class="label">Username:</span>
            <span class="value">{{ user.username }}</span>
          </div>
        </div>
  
        <!-- Links to Social Media -->
        <div class="social-links">
          <a :href="user.socialLinks.facebook" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
          <a :href="user.socialLinks.twitter" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Textbox for API Key -->
    <div class="api-key-input">
      <label for="apiKey">Enter your Chatbot API Key:</label>
      <input
        type="text"
        id="apiKey"
        v-model="chatbotApiKey"
        placeholder="Your API Key"
      />
    </div>
    <!-- Chatbot Section -->
    <div>
    <ChatbotHelper :apiKey="chatbotApiKey" />
    </div>
    
  </template>
  

  <!-- I have pure faith the chatbot works because I couldn't get a google api key -->
  <script>
  import ChatbotHelper from '@/components/ChatBotComponent.vue';
  
  export default {
    name: 'ProfilePage',
    data() {
      return {
        user: {
          name: 'John Doe',
          profilePicture: './assets/biden.jpg',
          bio: 'Web Developer | Foodie | Travel Enthusiast',
          email: 'johndoe@example.com',
          username: 'johndoe123',
          socialLinks: {
            facebook: 'https://www.facebook.com/johndoe',
            twitter: 'https://twitter.com/johndoe',
          },
        },
        chatbotApiKey: '', // Replace with your chatbot API key
      };
    },
    components: {
      ChatbotHelper, // Register the Chatbot component
    },
  };
  </script>
  
  <style scoped>
  .profile-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }
  
  .user-info {
    text-align: center;
  }
  
  .bio {
    margin-bottom: 20px;
  }
  
  .profile-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .profile-detail {
    display: flex;
    align-items: center;
  }
  
  .label {
    font-weight: bold;
    margin-right: 10px;
  }
  
  .social-links {
    margin-top: 20px;
  }
  
  .social-links a {
    font-size: 24px;
    margin-right: 10px;
    color: #007BFF;
  }

  .api-key-input {
  margin-top: 20px;
  }

  .api-key-input label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .api-key-input input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  </style>
  
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/store.js';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

// Vuetify
import 'vuetify/styles'; 
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Import the Chatbot component
import ChatbotHelper from './components/ChatBotComponent.vue';



const vuetify = createVuetify({
  components,
  directives,
});

store.dispatch('fetchRecipes').then(() => {
  const app = createApp(App);

  // Use Vuetify
  app.use(vuetify);

  // Use Vue Router
  app.use(router);

  // Use Vuex 
  app.use(store);

  // Use Vue Plyr
  app.use(VuePlyr, {
    plyr: {},
  });

  app.component('ChatbotHelper', ChatbotHelper);

  // Mount the app to the #app element
  app.mount('#app');
});

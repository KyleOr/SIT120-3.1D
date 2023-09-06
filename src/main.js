import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store' // Import your Vuex store instance

const app = createApp(App);
app.use(router);
app.use(store); // Register the Vuex store with your Vue app
app.mount('#app');

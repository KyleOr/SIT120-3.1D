<template>
  <div>
    <section class="explore-section" style="margin-top: 200px;">
      <h2 class="section-title">Featured Recipes</h2>
      <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="recipe in featuredRecipes" :key="recipe.id">
          <div class="carousel__item">
            <img :src="recipe.imageUrl" alt="Recipe Image" class="image-small" />
            <h3>{{ recipe.title }}</h3>
            <p>{{ recipe.description }}</p>
          </div>
        </Slide>
      </Carousel>
    </section>

    <section class="explore-section">
      <h2 class="section-title">Content from your fellow chefs</h2>
      <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="content in userGeneratedContent" :key="content.id">
          <div class="carousel__item">
            <img :src="content.imageUrl" alt="Content Image" class="image-small" />
            <h3>{{ content.title }}</h3>
            <p>{{ content.description }}</p>
          </div>
        </Slide>
      </Carousel>
    </section>

    <section class="explore-section">
      <h2 class="section-title">YouTube Videos</h2>
      <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="video in youtubeVideos" :key="video.id">
          <div class="carousel__item video-item">
            <vue-plyr>
              <div
                data-plyr-provider="youtube"
                :data-plyr-embed-id="getYoutubeVideoId(video.videoUrl)"
              ></div>
            </vue-plyr>
            <h3>{{ video.title }}</h3>
          </div>
        </Slide>
      </Carousel>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

export default defineComponent({
  name: 'ExplorePage',
  components: {
    Carousel,
    Slide,
    VuePlyr, 
  },
  data() {
    return {
      featuredRecipes: [], 
      userGeneratedContent: [], 
      youtubeVideos: [], 
    };
  },
  mounted() {
    this.loadFeaturedRecipes();
    this.loadUserGeneratedContent();
    this.loadYouTubeVideos();
  },
  methods: {
  async loadFeaturedRecipes() {
    try {
      const response = await import('./recipe-detail-data.json');
      this.featuredRecipes = response.default;
    } catch (error) {
      console.error('Error loading featured recipes data:', error);
    }
  },
  async loadUserGeneratedContent() {
    try {
      const response = await import('./user-generated-content.json');
      this.userGeneratedContent = response.default;
    } catch (error) {
      console.error('Error loading user-generated content data:', error);
    }
  },
  async loadYouTubeVideos() {
    try {
      const response = await import('./youtube-videos.json');
      this.youtubeVideos = response.default;
    } catch (error) {
      console.error('Error loading YouTube videos data:', error);
    }
  },
  getYoutubeVideoId(videoUrl) {
    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    return urlParams.get('v');
  },
},
});

</script>

<style scoped>
.explore-section {
  margin-bottom: 20px;
}

.carousel__item {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.carousel__item:hover {
  transform: scale(1.05);
}

.image-small {
  max-width: 200px; 
  height: auto; 
}

.video-item {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  cursor: pointer;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
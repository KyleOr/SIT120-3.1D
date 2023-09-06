<!-- HomePage.vue -->
<template>
  <div>
    <h1>Welcome, {{ userName }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['userName']), // Map the userName state
  },
};
</script>

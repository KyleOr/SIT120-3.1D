<template>
  <div>
    <input v-model="userName" @keyup.enter="submitName" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      userName: '', // Use the correct property name here
    };
  },
  methods: {
    ...mapMutations(['setUserName']), // Map the 'setUserName' mutation

    submitName() {
      // Get the user's name from the input field
      const name = this.userName;

      // Commit the mutation to set the user's name
      this.setUserName(name);
    },
  },
};
</script>

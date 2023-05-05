<template>
  <v-container fluid>
    <v-app-bar>
      <v-app-bar-title>SpaceX Launches</v-app-bar-title>
    </v-app-bar>
    {{ nextLaunch }}
  </v-container>
</template>

<script>
// External
import { defineComponent } from 'vue';

// Internal
import API from '@/api/methods';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      nextLaunch: '',
    };
  },
  created() {
    this.getNextLaunch();
  },
  methods: {
    async getNextLaunch() {
      const RESPONSE = await API.getNextLaunch();
      this.nextLaunch = RESPONSE.data;
    },
  },
});
</script>

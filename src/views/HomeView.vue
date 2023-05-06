<template>
  <v-container
    fluid
  >
    <v-app-bar color="grey-darken-4">
      <v-app-bar-title>
        SpaceX Launches
      </v-app-bar-title>
    </v-app-bar>
    <v-row>
      <v-col align="center">
        <NextLaunchPanel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// External
import { defineComponent } from 'vue';

// Internal
import NextLaunchPanel from '@/components/NextLaunchPanel.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NextLaunchPanel,
  },
  data() {
    return {
      // eslint-disable-next-line global-require
      imageUrl: require('@/assets/space.jpg'),
    };
  },
});
</script>

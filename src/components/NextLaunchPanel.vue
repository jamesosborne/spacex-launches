<template>
  <v-card
    flat
    color="black"
    class="pa-15"
  >
    <v-card-item class="text-left">
      <v-row>
        <v-col cols="5">
          <div class="text-subtitle-1">
            THE NEXT LAUNCH
          </div>
          <div class="text-h1 mb-2">
            {{nextLaunch.mission_name}}
          </div>
          <!-- <div class="mb-5 text-subtitle-1">
                  {{ formattedDate }}
                </div> -->
          <div
            class="text-subtitle-1 text-grey mb-5"
            v-if="nextLaunch.launch_site"
          >
            {{ nextLaunch.launch_site.site_name_long }}
          </div>
          <div
            class="text-h4">
            {{ nextLaunch.details }}
          </div>
        </v-col>
        <v-col>
          <v-img
            v-if="rocket"
            height="1200px"
            :src="require(`../assets/${rocket.rocket_id}.png`)" />
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>

</template>

<script>
//  Internal

import API from '@/api/methods';

export default {
  name: 'NextLaunchPanel',
  data() {
    return {
      nextLaunch: '',
      rocket: '',
    };
  },
  computed: {
    formattedDate() {
      const date = new Date(this.nextLaunch.launch_date_utc);
      const options = {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
      };
      return date.toLocaleString('en-GB', options);
    },
  },
  created() {
    this.getNextLaunch();
  },
  methods: {
    async getNextLaunch() {
      const RESPONSE = await API.getNextLaunch();
      this.nextLaunch = RESPONSE.data;
      this.rocket = RESPONSE.data.rocket;
    },
  },
};
</script>

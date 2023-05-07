<template>
  <v-card
    flat
    color="transparent"
    class="pa-15"
  >
    <v-card-item class="text-left text-white">
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
            class="text-subtitle-1 text-grey mb-2"
            v-if="nextLaunch.launch_site"
          >
            {{ nextLaunch.launch_site.site_name_long }}
          </div>
          <div
            class="text-subtitle-1 text-grey mb-5"
            v-if="nextLaunch.launch_site"
          >
            {{ formattedDate }}
          </div>
          <div
            class="text-h4">
            {{ nextLaunch.details }}
          </div>
          <v-row
            no-gutters
            class="mt-15 d-flex justify-space-between">
            <v-card
              color="grey-darken-4"
              class="pa-5"
              width="150px"
              height="150px"
            >
              <div class="text-subtitle-2 text-center">
                LAUNCH COST
              </div>
              <div class="text-h4 text-center mt-5">
                ${{ formatCost(rocketDetails.cost_per_launch) }}m
              </div>
            </v-card>
            <v-card
              color="grey-darken-4"
              class="pa-5"
              width="150px"
              height="150px"
            >
              <div class="text-subtitle-2 text-center">
                ROCKET STAGES
              </div>
              <div class="text-h4 text-center mt-5">
                {{ rocketDetails.stages }}
              </div>
            </v-card>
            <v-card
              color="grey-darken-4"
              class="pa-5"
              width="150px"
              height="150px"
            >
              <div class="text-subtitle-2 text-center">
                SUCCESS RATE
              </div>
              <div class="text-h4 text-center mt-5">
                {{ rocketDetails.success_rate_pct }}%
              </div>
            </v-card>
            <v-card
              v-if="rocketDetails"
              color="grey-darken-4"
              class="pa-5"
              width="150px"
              height="150px"
            >
              <div class="text-subtitle-2 text-center">
                HEIGHT
              </div>
              <div class="text-h4 text-center mt-5">
                {{ rocketDetails.height.meters }}m
              </div>
            </v-card>
            <v-row no-gutters>
              <v-col>
                <div class="text-h2 mt-15">
                  {{rocketDetails.rocket_name}}
                </div>
                <div class="text-h5 mt-5">
                  {{rocketDetails.description}}
                </div>
                <div>
                  <v-row>
                    <v-col
                      v-for="image in rocketDetails.flickr_images"
                      :key="image"
                      cols="12"
                      md="4"
                    >
                      <v-img
                        :src="image"
                        aspect-ratio="1"></v-img>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-row>
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
      rocketDetails: '',
    };
  },
  computed: {
    formattedDate() {
      const date = new Date(this.nextLaunch.launch_date_utc);
      const options = {
        day: '2-digit', month: '2-digit', year: 'numeric',
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
      this.getRocketDetails();
    },
    async getRocketDetails() {
      const RESPONSE = await API.getRocketDetails(this.rocket.rocket_id);
      this.rocketDetails = RESPONSE.data;
    },
    formatCost(number) {
      return (number / 1000000).toFixed(0);
    },
  },
};
</script>

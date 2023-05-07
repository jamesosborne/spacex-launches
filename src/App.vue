<template>
  <v-app class="app-background">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  .app-background {
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)),url(@/assets/space.jpg);
    background-size: cover;
    background-position: center;
  }
</style>

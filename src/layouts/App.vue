<template>
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">SPAJAM2019</v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link to="/">
        <v-btn icon>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/About">
        <v-btn icon>
          <v-icon>info</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

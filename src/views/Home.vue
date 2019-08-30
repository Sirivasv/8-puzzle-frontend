<template>
  <v-layout align-center justify-center column>
    <v-flex>
      <h1>Bienvenue mon ami</h1>
    </v-flex>
    <v-flex>
      <v-img src="img/download.gif" alt="journey" width="300px"></v-img>
    </v-flex>
  </v-layout>
</template>
<script>
import { UPDATE_TITLE } from "../mutation-types";

const Home = {
  name: "Home",
  methods: {},
  beforeMount: function() {
    this.$store.commit(UPDATE_TITLE, "Home");
  }
};

export default Home;
</script>

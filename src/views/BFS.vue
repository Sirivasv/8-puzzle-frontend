<template>
  <v-layout column>
    <v-flex xs6>
      <h1>Not all who wonders are lost</h1>
      <v-toolbar-title>{{ this.$store.state.bfsView }}</v-toolbar-title>
    </v-flex>
    <v-flex>
      <v-layout align-center>
        <v-flex>
          <v-text-field id="BFSInput" label="Insert a Message!"> </v-text-field>
        </v-flex>
        <v-flex>
          <v-btn id="getInfoButton" @click="displayPlayersInfo">
            Get Info M8
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import { UPDATE_TITLE } from "../mutation-types";
import { SEND_PARMS_BFS } from "../action-types";

const BFS = {
  name: "BFS",
  methods: {
    displayPlayersInfo: function() {
      // get Magic Words
      let first_message = document.getElementById("BFSInput").value;
      this.$store.dispatch(SEND_PARMS_BFS, first_message);
    }
  },
  beforeMount: function() {
    this.$store.commit(UPDATE_TITLE, "Búsqueda en Amplitud");
  }
};

export default BFS;
</script>

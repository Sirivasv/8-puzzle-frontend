<template>
  <v-layout column>
    <v-flex xs6>
      <h1>Not all who wonders are lost</h1>
    </v-flex>
    <v-flex>
      <v-layout align-center>
        <v-flex>
          <v-text-field
            id="magicWordsInput"
            label="Say the magic Words!"
            type="password"
          >
          </v-text-field>
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
import { RETRIEVE_PLAYER_LIST } from "../action-types";

const MagicWords = {
  name: "MagicWords",
  methods: {
    displayPlayersInfo: function() {
      // get Magic Words
      let magic_words = document.getElementById("magicWordsInput").value;
      this.$store.dispatch(RETRIEVE_PLAYER_LIST, magic_words);
    }
  },
  beforeMount: function() {
    this.$store.commit(UPDATE_TITLE, "Magic Words");
  }
};

export default MagicWords;
</script>

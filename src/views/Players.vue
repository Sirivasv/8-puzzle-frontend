<template>
  <CardList v-bind:items="this.$store.state.players"></CardList>
</template>
<script>
import { UPDATE_TITLE } from "../mutation-types";
import CardList from "../components/CardList";

const Players = {
  name: "Players",
  methods: {},
  components: {
    CardList
  },
  beforeMount: function() {
    this.$store.commit(UPDATE_TITLE, "Players");
  }
};

export default Players;
</script>

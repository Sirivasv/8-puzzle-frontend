<template>
  <v-layout align-center justify-center wrap>
    <CardItem v-for="item in items" v-bind:key="item.id" v-bind:item="item">
    </CardItem>
  </v-layout>
</template>
<script>
import CardItem from "./CardItem";

const CardList = {
  props: ["items"],
  components: {
    CardItem
  }
};

export default CardList;
</script>

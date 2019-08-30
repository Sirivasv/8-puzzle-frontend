<template>
  <v-flex xs6 sm3 md2>
    <v-card max-width="200px" min-height="400px">
      <v-img
        height="200px"
        class="white--text"
        v-bind:src="'https://s.sirv.top/backStats/index.php?photoID=' + item.id"
      >
      </v-img>
      <v-card-title>{{ item.first_name }}</v-card-title>
      <v-card-text>
        <p>{{ item.last_name }}</p>
        <p>{{ item.birthdate_locale }}</p>
        <p>{{ item.birthdate_relative }}</p>
        <p>{{ item.email }}</p>
      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script>
const CardItem = {
  props: ["item"]
};

export default CardItem;
</script>

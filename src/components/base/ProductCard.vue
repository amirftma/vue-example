<template>
  <v-card
    class="ma-4 "
    max-width="250"
    color="lighten-1"
  >
    <v-img
      class="white--text align-end"
      height="250px"
      :src="getImgUrl(product)"
    >
      <v-card-title>{{ product.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Location: {{ product.location }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <!-- <div>Whitehaven Beach</div> -->

      <div>{{ product.text }}</div>
    </v-card-text>


  </v-card>
</template>


<script>
export default {
    

    props: ['product'],

    methods: {
        getImgUrl(product) {
            var url = "https://picsum.photos/id/2" + product.id + "/250/250"
            return url
        }
    },
}
</script>
<template>
 <v-sheet
    class="mx-auto"
    elevation="2"
    max-width="100%"
  >
    <base-title
    :title="category"
    class="text-uppercase"
    space="1"
    />

    <v-slide-group
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in products"
        :key="n.id"
      
      >
      <ProductCard :product="n"/>
          <!-- :color="active ? undefined : 'grey lighten-1'" -->
        <!-- <v-card
          color="grey lighten-1"
          class="ma-4"
          height="300"
          width="200"
          @click="toggle"
        >
        <p>testffs thasdfis aaaffd</p> -->
        <!-- </v-card> -->
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>


<script>
import ProductJson from "@/assets/products.json"
export default {
    
    components: {
        BaseTitle: () => import("@/components/base/Title"),
        ProductCard: () => import("@/components/base/ProductCard"),
    },

    props: {
        category: String,
    },
    data() {
        return {
            products: ProductJson
        }
    },

    methods: {
        toggle() {
            console.log("an item selected")
        }
    },
}
</script>
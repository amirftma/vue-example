<template>
  <div class="home">
    <Hero />

    <Features />

    <product-list category="Category One" />

    <product-list category="Category Two" />

    <product-list category="Category Three" />

    <product-list category="Category Four" />
   


    <Footer-info />

  </div>
</template> 

<script>
// @ is an alias to /src

export default {
  name: 'Home',

  components: {
    FooterInfo: () => import("@/components/core/FooterInfo"),
    Hero: () => import("@/components/core/Hero"),
    Features: () => import("@/components/core/Features"),
    ProductList: () => import("@/components/core/ProductList")
  }
}
</script>

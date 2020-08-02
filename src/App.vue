<template>
  <v-app>
  <core-app-bar />

  <router-view/>
  <core-footer />
    

  </v-app>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
</template>


<script>
export default {
    name: 'App',

    components: {
      // CoreCta: () => import('@/components/core/Cta'),
      // CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreAppBar: () => import('@/components/core/AppBar'),
      // CoreView: () => import('@/components/core/View'),
    },
  }
</script>

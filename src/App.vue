<template>
  <v-app>
    <div>
      <core-app-bar />
    </div>

  <div>
    <router-view/>
  </div>
  
  <Footer />


  </v-app>
</template>


<script>
export default {
    name: 'App',

    components: {
      // CoreCta: () => import('@/components/core/Cta'),
      // CoreDrawer: () => import('@/components/core/Drawer'),
      Footer: () => import('@/components/core/Footer'),
      CoreAppBar: () => import('@/components/core/AppBar'),
      // CoreView: () => import('@/components/core/View'),
    },
  }
</script>

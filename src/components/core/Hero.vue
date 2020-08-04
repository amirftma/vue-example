<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/land-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading title="Sale Title Goes Here" />

          <base-body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos quae ipsam cum molestiae eaque impedit, rem possimus quod, ut,
            facilis quidem. Corporis, ducimus mollitia dolorem obcaecatisaepe neque possimus vitae.
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn>
              Create Account
            </base-btn>


          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',


    components : {
      BaseHeading: () => import("@/components/base/Heading"),
      BaseBody: () => import("@/components/base/Body"),
      BaseBtn: () => import("@/components/base/Btn"),
    },

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>

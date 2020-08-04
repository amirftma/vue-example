<template>

  <v-theme-provider dark>
    <base-section
      id="info-alt"
      class="grey darken-4"
    >
    <v-responsive
      class="mx-auto"
      max-width="1400">
      
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            md="3">
              <base-info />
          </v-col>


          
          <v-col
            cols="12"
            md="3"
          >
            <base-info-card title="Contact" />

            <base-business-contact />
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <base-feature-info title="Contact" />
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <base-business-info />
          </v-col>

        </v-row>

      </v-container>
    </v-responsive>
    </base-section>

    <!-- min-height="72" -->
    <!-- class="grey darken-4" -->
    
    <!-- <base-info></base-info> -->
    </v-theme-provider>

  
</template>

<script>
  export default {
    name: 'Footer',

    components: {
      BaseSection: () => import("@/components/base/Section"),
      BaseInfo: () => import("@/components/base/Info"),
      BaseInfoCard: () => import("@/components/base/InfoCard"),
      BaseBusinessInfo: () => import("@/components/base/BusinessInfo"),
      BaseBusinessContact: () => import("@/components/base/BusinessContact"),
      BaseFeatureInfo:() => import("@/components/base/Feature"),
    },

    props: {
      title: String,
      dark: Boolean,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Address',
          text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '01 (800) 433 744<br>01 (800) 433 633',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: 'john@vuetifyjs.com<br>heather@vuetifyjs.com',
        },
      ],
    }),
  }
</script>

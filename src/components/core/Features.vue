<template>
  <base-section
    id="features"
  >

    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    components: {
      BaseSection: () => import("@/components/base/Section"),
      BaseInfoCard: () => import("@/components/base/InfoCard"),
    },

    data: () => ({
      cards: [
        {
          icon: '$vuetify.icons.farm',
          title: 'Farm Stuff',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.',
        },
        {
          icon: '$vuetify.icons.veggie',
          title: 'Garden Stuff',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.',
        },
        {
          icon: '$vuetify.icons.money',
          title: 'Money Stuff',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.',
        },
        {
          icon: '$vuetify.icons.fast',
          title: 'Fast Stuff',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.',
        },
      ],
    }),
  }
</script>

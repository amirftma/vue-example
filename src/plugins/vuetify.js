import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import FarmIcon from '@/components/icons/FarmIcon.vue'
import VeggiesIcon from '@/components/icons/VeggiesIcon.vue'
import MoneyIcon from '@/components/icons/MoneyIcon.vue'
import FastIcon from '@/components/icons/FastIcon.vue'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      farm: {
        component: FarmIcon, // you can use string here if component is registered globally
        props: { // pass props to your component if needed
          name: 'farm',
        },
      },
      veggie: {
        component: VeggiesIcon, // you can use string here if component is registered globally
        props: { // pass props to your component if needed
          name: 'veggie',
        },
      },
      money: {
        component: MoneyIcon, // you can use string here if component is registered globally
        props: { // pass props to your component if needed
          name: 'money',
        },
      },
      fast: {
        component: FastIcon, // you can use string here if component is registered globally
        props: { // pass props to your component if needed
          name: 'fast',
        },
      },
    },
  },  
});

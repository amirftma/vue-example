import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: 'Home',
        href: '/#!',
      },
      {
        text: 'Products',
        href: '/products',
      },
      {
        text: 'Contact Us',
        href: '#contact',
      },
      {
        text: 'About',
        href: '#about',
      },
    ],
  },
  getters: {
    links: (state) => {
      return state.items 
    }
  },
  mutations: {
   
  },
  actions: {

  },
})
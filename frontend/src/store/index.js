import { createStore } from 'vuex'
import axios from 'axios'
const baseUrl = 'http://localhost:7898'

export default createStore({
  state: {
    product: null,
    users: null
  },
  getters: {
  },
  mutations: {
    setProduct(state, data){
      state.product = data
    },
    setUsers(state, data){
      state.users = data
  },
  deleteProduct(state, id){
    state.data = state.data.filter(
      (product) => id !== product.id
    );
  },
},
  actions: {

    async fetchProduct(context){
      const res= await axios.get(baseUrl +'/products')
      console.log(res.data.results);
      context('setProduct',res.data)
      return res;
    }

  },
  modules: {
  }
})

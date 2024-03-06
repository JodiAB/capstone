import { createStore } from 'vuex'
import axios from 'axios'
const baseUrl = 'http://localhost:7898'

export default createStore({
  state: {
    product: null,
    users: null
  },
  getters: {
    product: state => state.product,
    users: state => state.users
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

    async fetchProduct({commit}){
      const res= await axios.get(`${baseUrl}product`)
      console.log(res.data.results);
      commit(setProduct, res.data.results)
      return res
    }

  },
  modules: {
  }
})

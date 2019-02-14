import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1,
  },
  mutations: {
    add(state,num){
      state.count+=num;
    }
  },
  actions: {   /*异步操作*/

  },
  getters:{
    count:function(state){
      state.count += 100;
    }
  }
})

import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/store/product.js' // モジュールをストアルートに登録
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product // モジュールをストアルートに登録
  }
})

export default store
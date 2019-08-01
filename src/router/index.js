import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントの読み込み
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductPhoto from '@/views/ProductPhoto.vue'
Vue.use(VueRouter)


//VueRouterインスタンスの生成
const router = new VueRouter({
    mode: 'history',
    //URLのパスと紐付くコンポーネントをマッピング
    routes: [
        { path: '/', component: Home},
        // { path: '/product/:id', component: Product}, :idとしておけばパラメータに可変の値を入れられる
        { path: '/product/:id(\\d+)', component: Product}, //(\\d+)を付ければパラメータには数字しか入らない正規表現となる
        { path: '/productphoto', component: ProductPhoto },
        ]
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントの読み込み
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
// アプリの画像用コンポーネント
import ProductPhoto from '@/views/ProductPhoto.vue'
// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)


//VueRouterインスタンスの生成
const router = new VueRouter({
    mode: 'history',
    //URLのパスと紐付くコンポーネントをマッピング
    routes: [
        { path: '/', component: Home },
        { path: '/product/:id',
          component: Product,
          props: route => ({ id: Number(route.params.id) }),
        },
        { name: 'ProductPhoto',path: '/product-photos', component: ProductPhoto }
        ],
    
})

//生成したVueRouterインスタンスをエクスポート
export default router
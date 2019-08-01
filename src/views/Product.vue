<template>
    <div class="product" v-if='item' key='product'>
        <h1>{{ item.name }}</h1>
        <a :href='item.githuburl'><i class="fab fa-github-square fa-5x"></i></a>
        <a :href='item.url'><i class="fas fa-sign-in-alt fa-5x"></i></a>
        <p class='content'>{{ item.content }}</p>
        <span v-for=' img in item.photo'>
            <div>
                <img :src="img.url" v-if="img.id === item.id " class='b-col-img'/>
            </div>
        </span>
    <Footer />
    </div>
    <div v-else key='loading'>Loading...</div>
</template>

<script>
import products from '@/api/products.js'
import Footer from '@/views/Footer.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
      Footer
  },
    props: { id: Number },
    data() {
        return {
            item : null
        }
    },
    computed: mapGetters('product', ['detail']),
    watch: { 
        id: {
            handler() {
                products.asyncFind(this.id, item => {
                    this.item = item
                })
            }, immediate: true
        }    
    }
}
</script> 

<style>
@import url('https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap');
    .content{
        font-size: 30px;
        font-family: 'Sawarabi Mincho', sans-serif;
    }
</style>
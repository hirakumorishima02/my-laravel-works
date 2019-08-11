<template>
    <div class="product" v-if='item' key='product'>
        <h1 class='title'>{{ item.name }}</h1>
        <a :href='item.githuburl' target="_blank"><i class="fab fa-github-square fa-5x"></i></a>
        <a :href='item.url' target="_blank"><i class="fas fa-sign-in-alt fa-5x"></i></a>
          <swiper :options="swiperOption"> 
                <swiper-slide v-for='img in item.photo' v-if="img.id === item.id">
                    <img :src="img.url" v-if="img.id === item.id" class='b-col-img'/>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        <p class='content' style='padding-top:100px;'>{{ item.content }}</p>
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
            item : null,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
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
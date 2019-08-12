<template>
    <div>
        <div class="home">
            <h1 class='title'>My Laravel Works</h1>
                <a href='https://github.com/hirakumorishima02' target="_blank"><i class="fab fa-github-square fa-5x"></i></a>
                <a href='https://twitter.com/hiwriterprogram' target="_blank"><i class="fab fa-twitter-square fa-5x"></i></a>
                <a href='https://www.facebook.com/ujinchu' target="_blank"><i class="fab fa-facebook-square fa-5x"></i></a>
        </div>
        <Footer />
    </div>
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
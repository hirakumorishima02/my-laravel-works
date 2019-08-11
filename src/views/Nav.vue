<template>
    <nav class='nav' style='padding-top:150px;'>
      <router-link to="/" style='color:#989faa;padding-right:0;' exact><i class="fab fa-fort-awesome"></i></router-link>
      <span v-for='{id, name} in list' :key='id' class='nav-span'>
        <router-link :to="`/product/${ id }`" style='color:#989faa;'>{{ name }}</router-link>
      </span>
    </nav>
</template>

<script>
import products from '@/api/products.js'
export default {
  name: 'App',
  computed: {
    list: () => products.fetch()
  }
}
</script>
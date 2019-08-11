<template>
  <div id="app" style='margin:0;'>
    <Nav />
      <router-view />
  </div>
</template>


<script>
import Nav from '@/views/Nav.vue'
export default {
  components: {
      Nav
  },
  name: 'App',
  computed: {
    list: () => products.fetch()
  }
}
</script>

<style>
@import "./css/styles.css";
@import url('https://fonts.googleapis.com/css?family=Saira+Stencil+One&display=swap');
#app {
  font-family: 'Saira Stencil One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{ background: #FFF0F5 }

.view-enter-active, .view-leave-active {
  transition: opacity 1s;
}

.view-enter, .view-leave-to {
  opacity: 0;
}
</style>

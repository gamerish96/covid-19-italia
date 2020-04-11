<template>
  <div id="app">
    <navbar />
    <router-view/>
    <bottom />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import bottom from '@/components/footer.vue';

export default {
  components: {
    navbar,
    bottom,
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400&display=swap');
  html{
    height: 100%;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    background-color: #f5f6fa;
  }
  body{
    height: 100%;
  }
</style>

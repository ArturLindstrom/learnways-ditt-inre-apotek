<template>
  <NavComponent/>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';
</script>


<style scoped lang="scss">
  .app{
    /* background: tomato; */
  }
</style>


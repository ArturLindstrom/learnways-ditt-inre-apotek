<template>
  <InformationButton></InformationButton>
  <NavComponent/>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';
import ButtonComponent from './components/ButtonComponent.vue';
import InformationButton from './components/InformationButton.vue';
</script>


<style scoped lang="scss">

</style>


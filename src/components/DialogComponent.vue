<template>
  <section class="wrapper">
    <h2>
      {{data.dia_02_h2}}
    </h2>
    <p v-html="data.dia_02_p1">
    </p>
  </section>
</template>

<script setup>
  import { useStore } from 'vuex';
  const store = useStore();
  const data = store.state.data;

</script>

<style scoped lang='scss'>
.wrapper{
  background-color: #CFE0DF;
  height: 100vh;
  
}
</style>
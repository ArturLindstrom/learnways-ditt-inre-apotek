<template>
<h4>
  {store.state.modalContent.heading}
</h4>
</template>

<script setup>
  import { useStore } from 'vuex';
  const store = useStore();
  

</script>

<style scoped lang='scss'>

</style>
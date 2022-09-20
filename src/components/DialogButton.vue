<template>
<button>

</button>
</template>

<script setup>

</script>

<style scoped lang='scss'>
  button{
    width: 35px;
    height: 35px;
    border-radius:50%;
    background-color: #EEEAE6;
    background: url('public/assets/img/ICON-HOTSPOT.svg') no-repeat center;
    /* border: 2px solid black; */
    cursor: pointer;
    transition: transform 0.2s;
    &:hover{
      transform: rotate(45deg);
    }
  }
</style>

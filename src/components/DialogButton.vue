<template>
<div class="dialog-wrapper">
  <button @click="showDialog = !showDialog">
  
  </button>
  <transition name="scale">
    <div class="dialog-content" v-if="showDialog">
      <img src="/assets/img/info-line.svg" alt="">
      <transition name="text">
        <span >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit doloribus molestias cum tempora impedit commodi, rerum incidunt
        </span>
      </transition>
    </div>
  </transition>
</div>
</template>

<script setup>
import { ref } from 'vue';

const showDialog = ref(false)
</script>

<style scoped lang='scss'>
.dialog-wrapper{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}


  button{
    z-index: 2;
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

  .dialog-content{
    position: absolute;
    transform: translate(50%);
    display: flex;
   
  }
  span{
    display: block;
    width: 200px;
    /* height: 100px; */
    background-color: white;
    padding: 10px;
    transform: translate(-20px);
  }

  .scale-enter-active,
.scale-leave-active {
  transition: transform 0.7s ease;
}

.scale-enter-from,
.scale-leave-to
 {
  /* transform: translateX(0%); */
  /* transform: matrix(1, 0, 0, 1, 0, 1); */
  transform: scale(0.1);
  /* opacity: 0; */
 
}


</style>

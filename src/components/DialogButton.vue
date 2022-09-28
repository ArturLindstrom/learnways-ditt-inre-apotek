<template>
<div class="dialog-wrapper">
  <button @click="showDialog = !showDialog">
  </button>
  <transition name="scale">
    <div class="dialog-content" v-if="showDialog">
      <img src="/assets/img/info-line.svg" alt="">
      <transition name="text">
        <span>
          {{props.text}}
        </span>
      </transition>
    </div>
  </transition>
</div>
</template>

<script setup>
import { ref } from 'vue';

const showDialog = ref(false)

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
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
    background: url('assets/img/ICON-HOTSPOT.svg') no-repeat center;
    /* border: 2px solid black; */
    cursor: pointer;
    transition: transform 0.2s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  .dialog-content{
    position: absolute;
    transform: translate(50%);
    display: flex;
    
  }
  img{
    width: 30%;
  }
  span{
    border-radius: 5px;
    display: block;
    border: 3px solid black;
    width: 200px;
    /* height: 100px; */
    background-color: white;
    padding: 10px;
    transform: translate(-20px);
    font-size: 18px;
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

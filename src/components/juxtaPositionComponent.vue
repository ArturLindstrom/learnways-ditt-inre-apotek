<template>
<section>
    <ImgComparisonSlider class="slider" >
      <div class="red-square"></div>
      <div class="img" slot="first">
        <div class="text-container">
          <p class="page-title">
            {{props.title}}
          </p>
          <h2>
            {{props.heading}}
          </h2>
          <p>
            {{props.body}}
          </p>
          <p class="instruction">
            {{props.instruction}}
          </p>
        </div>
      </div>
    </ImgComparisonSlider>
</section>
</template>

<script setup>
import { ImgComparisonSlider } from '@img-comparison-slider/vue'
import { ref } from 'vue';

const show = ref(true);

const props = defineProps({
    title: {
        type: String,
    },
  heading: {
    type: String,
    default: ''
  },
  body: {
    type: String,
    default: ''
  },
  instruction: {
    type: String,
    default: ''
  },

})
</script>

<style scoped lang='scss'>
  .red-square{
    width:200px;
    height: 200px;
    background-color: red;
    z-index: 4;
  }
section{
    padding: 0;
    display: flex;
    align-items: center;
    cursor: w-resize
}

.slider{
    width: 100%;
    height: 100%;
    background: url(assets/img/juxtaposition1-01-2.png) #BBC19B center center no-repeat;
    background-size: 100%;
    --divider-color: #000;
    --divider-width: 3px;
    --default-handle-color: #000;
    --default-handle-width: 80px;
    &:focus{
        outline: none;
    }
}

.first-image{
    background-color: #F4E9D7;
    /* height: 100%; */
}


.img{
    background: url(assets/img/juxtaposition1-01-1.png) #F4E9D7 center center no-repeat; 
    background-size: 100%;
    height: 100%;
    width: 100;
}

.text-container{
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 140px;

}

.instruction{
  font-weight: bold;
  margin-top: 20px;
}

</style>
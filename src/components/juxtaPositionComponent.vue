<template>
<section>
    <ImgComparisonSlider class="slider">
        <!-- eslint-disable -->
        <!-- <img
          class="first-image"
          slot="first"
          style="width: 100%"
          src="assets/img/juxtaposition1-01-1.png"
        /> -->
        <div class="img-test"
        slot="first">

        </div>
        <!-- <div class="img-test2"
        slot="second">

        </div> -->
        <!-- <img
          class="second-image"
          slot="second"
          style="width: 100%"
          src="assets/img/juxtaposition1-01-2.png"
        /> -->
        <!-- eslint-enable -->
      </ImgComparisonSlider>
</section>
</template>

<script setup>
import { ImgComparisonSlider } from '@img-comparison-slider/vue'
</script>

<style scoped lang='scss'>
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
}

.first-image{
    background-color: #F4E9D7;
    /* height: 100%; */
}

.second-image{
    background-color: #F0EDE9;
    height: 100%;
    width: 100%;
}

.img-test{
    background: url(assets/img/juxtaposition1-01-1.png) #F4E9D7 center center no-repeat; 
    background-size: 100%;
    height: 100%;
    width: 100;
}
.img-test2{
    background-color: #F4E9D7;
    background-image: url(assets/img/juxtaposition1-01-2.png);
    height: 100%;
    width: 100%;
    outline: red 1px solid;
}
</style>
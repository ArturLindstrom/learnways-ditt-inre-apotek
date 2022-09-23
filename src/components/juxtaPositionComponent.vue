<template>
<section>
    <ImgComparisonSlider class="slider"
    :style="{backgroundImage: props.images[1].src, backgroundColor: props.images[1].bgColor}">
      <div class="img" slot="first"
      :style="{backgroundImage: props.images[0].src, backgroundColor: props.images[0].bgColor}">
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
          <p class="instruction" >
            {{props.instruction}}
          </p>
          <div class="text-box first" :style="{backgroundColor: props.images[1].bgColor}">
            <h3>{{props.textBox[0].heading}}</h3>
            <p>{{props.textBox[0].body}}</p>
          </div>
        </div>
      </div>
      <div slot="second">
        <div class="text-box second" :style="{backgroundColor: props.images[0].bgColor}">
          <h3>{{props.textBox[1].heading}}</h3>
          <p>{{props.textBox[1].body}}</p>
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
  textBox: {
    type: Array,
  },
  images: {
    type: Array,
  },


})
</script>

<style scoped lang='scss'>
section{
    padding: 0;
    cursor: w-resize
}

.slider{
  position: relative;
    width: 100%;
    height: 100vh;
    background:  center center no-repeat;
    background-size: 100%;
    --divider-color: #000;
    --divider-width: 3px;
    --default-handle-color: #000;
    --default-handle-width: 80px;
    &:focus{
        outline: none;
    }
}




.img{
    background: center center no-repeat; 
    background-size: 100%;
    height: 100%;
    width: 100%;
}

.text-container{
  height: 100%;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;

}

.instruction{
  font-weight: bold;
  margin-top: 20px;
}

.text-box{
 
  padding: 20px;
  border-radius: 10px;
  width: 35%;
}

.second{
  position: absolute;  
  margin-top: 3% ;
  left: 5%;
  background-color: #F4E9D7;
}

.first{
  position: absolute;
  /* bottom: 0; */
  margin-top: 25% ;
  right: 10%;
  background-color: #BBC19B;
  
}

</style>
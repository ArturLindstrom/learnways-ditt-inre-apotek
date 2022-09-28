<template>
  <div>
    <img
      v-for="(image, i) in sectionImages"
      :src="`/assets/img/${image}`"
      :key="image"
      :data-speed="i  * 0.4 "
      :class="'image' + props.section + '-' +  (i + 1)"
    >
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
    section: {
        type: Number,
        default: ''
    },
})

const sectionImages = computed(() => {
  if(props.section === 1){
    return [
      '01-bacteria.png',
      '02-bacteria.png',
      '05-bacteria.png',
      'apelsin-inre-apotek.png',
      '05-antibiotika.png',
      '09-antikropp.png',
      '07-bacteria.png',
      '10-antibiotika.png',
    ]
  } else if(props.section === 2){
    return [
      '01-bacteria.png',
      '0-bacteria.png',
      '02-bacteria.png',
      '07-bacteria.png',
      'parallax-image5.png',
      'parallax-image5.png'
    ]
  } else if(props.section === 3){
    return [
      '01-bacteria.png',
      '02-bacteria.png',
      '07-bacteria.png',
      '05-bacteria.png',
      '0-bacteria.png',
    ]
  } else if(props.section === 4){
    return [
      '12-antibiotika.png',
      '10-antibiotika.png',
      '10-antibiotika.png',
      '05-antibiotika.png',
      '05-antibiotika.png',
      '05-antibiotika.png',
    ]
  } else if (props.section === 5){
    return [
      '0-bacteria.png',
      '0-bacteria.png',
      '0-bacteria.png',
    ]
  }
  return ''
})

onMounted(() => {
  parallaxAnimation()
});

const parallaxAnimation = () => {
  gsap.to("[data-speed]",{
  // y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * 2000,
  ease: "none",
  rotate: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * 200,
  scrollTrigger: {
    start: 0,
    end: '200%',
    // end: () => "+=" + document.body.offsetHeight,
    invalidateOnRefresh: true,
    scrub: 5
  }
  });
}



</script>

<style scoped lang='scss'>
  div{
    overflow-x: hidden;
    /* z-index: 0; */
  }

img {
  position: absolute;
  z-index: -1;
  /* top: 50%;
  right: 10%; */
}
 
.image1-1 {
  top: 30%;
  right: 10%;
  height: 188px;
  transform: rotate(45deg);
  width: 188px;
}

.image1-2 {
  top: 35%;
  right: 15%;
  height: 336.07px;
  width: 336.07px;
}

.image1-3{
  top: -10%;
  right: 5%;
  width: 300px;
  height: 300px;
}

.image1-4 {
  z-index: -2;
  top: 10%;
  right: 5%;
  width: 485px;
  height: 485px;
}

.image1-5 {
  top: 20%;
  right: 15%;
  transform: rotate(110deg);
  width: 102px;
  height: 102px;
}

.image1-6 {
  top: 60%;
  right: 10%;
  transform: rotate(45deg);
  width: 151px;
  height: 151px;
}

.image1-7{
  z-index: -3;
  top: 40%;
  right: 7%;
  width: 577px;
  height: 577px;
}

.image1-8 {
  top: 70%;
  right: 5%;
  transform: rotate(30deg);
  width: 160px;
}

/* .image1-9{
  top: 10%;
  right: 20%;
  width: 80px;
  height: 180px;
} */




.image2-1{
  top: 0%;
  right: 5%;
  height: 400px;
}

.image2-2{
  top: 0%;
  right: 10%;
  transform: rotate(45deg);
  height: 188px;
  width: 188px;
}

.image2-3{
  top: 40%;
  right: 8%;
  height: 336.07px;
  width: 336.07px;
}

.image2-4{
  top: 60%;
  right: 30%;
  height: 300px;
  width: 300px;
}

.image2-5{
  top: 90%;
  right: 50%;
  height: 102px;
  width: 102px;
}

.image2-6{
  top: 80%;
  right: 0%;
}


.image3-1{
  top: 30%;
  left: 20%;
  height: 188px;
  transform: rotate(45deg);
  width: 188px;
}

.image3-2{
  top: 30%;
  left: 0%;
  height: 336.07px;
  width: 336.07px;
}

.image3-3{
  top: -10%;
  left: 5%;
  width: 300px;
  height: 300px;
}

.image3-4{
  top: 10%;
  left: 25%;
  width: 485px;
  height: 485px;
}

.image3-5{
  top: 20%;
  left: 35%;
  width: 102px;
  height: 102px;
}

.image4-1{
  top: -40%;
  right: 0%;
  
}

.image4-2{
  top: 50%;
  right: 10%;
  transform: rotate(60deg);
  height: 188px;
  width: 188px;
}

.image4-3{
  top: 30%;
  right: 40%;
  height: 188px;
  width: 188px;
}

.image4-4{
  top: 40%;
  right: 30%;
  transform: rotate(60deg);
  height: 151px;
  width: 151px;
}

.image4-5{
  top: 105%;
  right: 40%;
  height: 151px;
  width: 151px;
}

.image4-6{
  top: 120%;
  right: 25%;
  transform: rotate(60deg);
  height: 151px;
  width: 151px;
}

.image5-1{
  top: -60%;
  right: 5%;
  height: 700px;
  transform: rotate(270deg);
}

.image5-2{
  top: 10%;
  right: 5%;
  transform: rotate(45deg);
  height: 188px;
  width: 188px;
}

.image5-3{
  top: 20%;
  right: 40%;
  transform: rotate(70deg);
  height: 336.07px;
  width: 336.07px;
}

</style>
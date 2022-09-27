<template>
  <div>
    <img
      v-for="(image, i) in sectionImages"
      :src="`/assets/img/${image}`"
      :key="image"
      :data-speed="Math.random() + 0.5"
      :class="'image' + props.section + '-' +  (i + 1)"
    >
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
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
      '01-bacteria.png',
    ]
  } else if(props.section === 3){
    return [
      '01-bacteria.png',
      '02-bacteria.png',
      '07-bacteria.png',
      '05-bacteria.png',
      '0-bacteria.png',
    ]
  }
})

onMounted(() => {
  parallaxAnimation()
});

const parallaxAnimation = () => {
  gsap.to("[data-speed]",{
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
  ease: "none",
  rotate: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * 400,
  scrollTrigger: {
    start: 0,
    end: '200%',
    // end: () => "+=" + document.body.offsetHeight,
    invalidateOnRefresh: true,
    scrub: 3
  }
  });
}

</script>

<style scoped lang='scss'>
  div{
    overflow-x: hidden;
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
  top: 30%;
  right: 50%;
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
  top: 10%;
  right: 25%;
  width: 485px;
  height: 485px;
}

.image1-5 {
  top: 20%;
  right: 45%;
  width: 102px;
  height: 102px;
}

.image1-6 {
  top: 50%;
  right: 15%;
  width: 151px;
  height: 151px;
}

.image1-7{
  top: 40%;
  right: 5%;
  width: 577px;
  height: 577px;
}

.image1-8 {
  top: 70%;
  right: 5%;
  width: 360px;
  height: 360px;
}

.image1-9{
  top: 10%;
  right: 20%;
  width: 180px;
  height: 180px;
}

.image1-10 {
  top: 65%;
  right: 40%;
  height: 487px;
  width: 487px;
}

.image1-11{
 top: 60%;
  right: 70%;

}

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
  top: 30%;
  right: 10%;
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
  height: 485px;
  width: 485px;
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


</style>
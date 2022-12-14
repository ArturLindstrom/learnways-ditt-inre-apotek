<template>
  <div>
    <transition-group name="list">
    <img
      v-for="(image, i) in sectionImages"
      :src="`/assets/img-min/${image}`"
      :key="image + i"
      :data-speed="i  * 0.4"
      class="parallax-image"
      :class="generateClasses(i)"
    >
    </transition-group>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useStore } from "vuex";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  section: {
    type: Number,
    default: 0,
  },
});

onMounted(() => {
  parallaxAnimation();
});

const store = useStore();

// a bunch of ternary operators to generate the classes for the images (needed for specific positioning css)
const generateClasses = (i) => [
  // applied for all images (example: image1-1)
    'image' + props.section + '-' + (i + 1),
  // only applied if the one of the accordions in section 6 is opened. also applies a number for which accordion is opened (example: image6-1-1)
    currentAccordion.value && props.section == 6 ? 'accordion' + props.section + '-' + currentAccordion.value + '-' + (i + 1) : '',
  // gives a class to all images in section 6 if an accordion is opened
    accordionOpened.value && props.section == 6 ? 'accordion__image' : '',
  // hides all images in section 6 if an accordion has been opened, but is now closed
    !currentAccordion.value && accordionOpened.value && props.section == 6 ? 'hide' : '',

    currentAccordion2.value && props.section == 7 ? 'accordion' + props.section + '-' + currentAccordion2.value + '-' + (i + 1) : '',
    accordionOpened2.value && props.section == 7 ? 'accordion__image' : '',
    !currentAccordion2.value && accordionOpened2.value && props.section == 7 ? 'hide' : '',
  ]

const currentAccordion = computed(() => store.state.currentAccordion);
const currentAccordion2 = computed(() => store.state.currentAccordion2);

const accordionOpened = computed(() => store.state.accordionOpened);
const accordionOpened2 = computed(() => store.state.accordionOpened2);

//a switch statement that checks wich section is being rendered and returns the correct images
const sectionImages = computed(() => {
  switch (props.section) {
    case 1:
      return [
        "01-bacteria.png",
        "02-bacteria.png",
        "05-bacteria.png",
        "apelsin-inre-apotek.png",
        "05-antibiotika.png",
        "09-antikropp.png",
        "07-bacteria.png",
        "10-antibiotika.png",
      ];
    case 2:
      return [
        "01-bacteria.png",
        "0-bacteria.png",
        "02-bacteria.png",
        "07-bacteria.png",
        "parallax-image5.png",
        "parallax-image5.png",
      ];
    case 3:
      return [
        "01-bacteria.png",
        "02-bacteria.png",
        "07-bacteria.png",
        "05-bacteria.png",
        "0-bacteria.png",
      ];
    case 4:
      return [
        "12-antibiotika.png",
        "10-antibiotika.png",
        "10-antibiotika.png",
        "05-antibiotika.png",
        "05-antibiotika.png",
        "05-antibiotika.png",
      ];
    case 5:
      return [
        "vit2-bacteria-learnways.png",
        "vit2-bacteria-learnways.png",
        "vit2-bacteria-learnways.png",
      ];
    case 6:
      // a switch statement that checks which accordion is opened and returns the correct images
      switch (store.state.currentAccordion) {
        case 1:
          return [
            "01-gurka.png",
            "01-ananas.png",
            "01-ananas.png",
            "apelsin-inre-apotek.png",
            "apelsin-inre-apotek.png",
            "01-gurka.png",
          ];
        case 2:
          return [
            "01-brain.png",
            "11-bacteria.png",
            "11-bacteria.png",
            "11-bacteria.png",
            "01-signal.png",
            "01-signal.png",
            "01-signal.png",
            "01-signal.png",
          ];
        case 3:
          return [
            "02-vita-blodkroppar.png",
            "02-vita-blodkroppar.png",
            "02-vita-blodkroppar.png",
            "02-vita-blodkroppar.png",
            "02-vita-blodkroppar.png",
            "09-antikropp.png",
            "09-antikropp.png",
            "09-antikropp.png",
            "09-antikropp.png",
          ];
        case null:
          return [
            "apelsin-inre-apotek.png",
            "01-gurka.png",
            "02-vita-blodkroppar.png",
            "01-signal.png",
            "11-bacteria.png",
            "11-bacteria.png",
          ];
        default:
          return [];
      }
    case 7:
    // a switch statement that checks which accordion is opened and returns the correct images
      switch (store.state.currentAccordion2) {
        case 1:
          return ["01-food.png", "01-bean.png", "02-food.png", "02-food.png"];
        case 2:
          return [
            "20-bacteria-learnways.png",
            "20-bacteria-learnways.png",
            "20-bacteria-learnways.png",
            "03-food.png",
          ];
        case 3:
          return [
            "12-antibiotika.png",
            "13-anitbiotika.png",
            "15-pill.png",
            "16-pill.png",
            "12-antibiotika.png",
            "12-antibiotika.png",
            "3-antibiotika-learnways.png",
            "3-antibiotika-learnways.png",
          ];
        case null:
          return [
            "02-apple.png",
            "01-bean.png",
            "4-antibiotika-learnways.png",
            "20-bacteria-learnways.png",
            "20-bacteria-learnways.png",
            "4-antibiotika-learnways.png",
          ];
        default:
          return [];
      }
    default:
      return [];
  }
});


// the main parallax function that sets different scroll speed on every image depending on the data-speed attribute
const parallaxAnimation = () => {
  gsap.to(".parallax-image", {
    y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * 2000,
    ease: "none",
    rotate: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * 200,
    scrollTrigger: {
      start: 0,
      end: "200%",
      invalidateOnRefresh: true,
      scrub: 5,
    },
  });
};
</script>

<style scoped lang="scss">
div {
  overflow-x: hidden;
}

img {
  position: absolute;
  z-index: -1;
}

.hide {
  display: none;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}

@keyframes bounce2 {
  0% {
    transform: translateY(0);
    rotate: 0deg;
  }
  50% {
    transform: translateY(5px);
    rotate: -3deg;
  }
  90% {
    transform: translateY(0);
    rotate: 0deg;
  }
  100% {
    transform: translateY(0);
    rotate: 0deg;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
    rotate: 0deg;
  }
  50% {
    transform: translateY(-5px);
    rotate: 2.5deg;
  }
  90% {
    transform: translateY(0);
    rotate: 0deg;
  }
  100% {
    transform: translateY(0);
    rotate: 0deg;
  }
}

@keyframes brain-bounce {
  0% {
    height: 800px;
  }
  50% {
    height: 825px;
  }
  100% {
    height: 800px;
  }
}

@keyframes brain-signal {
  0% {
  }
  50% {
    scale: 1.1;
  }
  100% {
  }
}
/* positioning for every image used in parallax */
.image1-1 {
  top: 30%;
  right: 15%;
  height: 188px;
  transform: rotate(45deg);
  width: 188px;
}

.image1-2 {
  top: 35%;
  right: 20%;
  height: 336.07px;
  width: 336.07px;
}

.image1-3 {
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
  right: 35%;
  transform: rotate(110deg);
  width: 102px;
  height: 102px;
}

.image1-6 {
  top: 60%;
  right: 2%;
  transform: rotate(45deg);
  width: 151px;
  height: 151px;
}

.image1-7 {
  z-index: -3;
  top: 40%;
  right: 20%;
  width: 577px;
  height: 577px;
}

.image1-8 {
  top: 70%;
  right: 5%;
  transform: rotate(30deg);
  width: 160px;
}

.image2-1 {
  top: 0%;
  right: 5%;
  height: 400px;
}

.image2-2 {
  top: 0%;
  right: 10%;
  transform: rotate(45deg);
  height: 188px;
  width: 188px;
}

.image2-3 {
  top: 40%;
  right: 8%;
  height: 336.07px;
  width: 336.07px;
}

.image2-4 {
  top: 60%;
  right: 30%;
  height: 300px;
  width: 300px;
}

.image2-5 {
  top: 90%;
  right: 50%;
  height: 102px;
  width: 102px;
}

.image2-6 {
  top: 80%;
  right: 0%;
}

.image3-1 {
  top: 30%;
  left: 20%;
  height: 188px;
  transform: rotate(45deg);
  width: 188px;
}

.image3-2 {
  top: 30%;
  left: 0%;
  height: 336.07px;
  width: 336.07px;
}

.image3-3 {
  top: -10%;
  left: 5%;
  width: 300px;
  height: 300px;
}

.image3-4 {
  top: 10%;
  left: 25%;
  width: 485px;
  height: 485px;
}

.image3-5 {
  top: 20%;
  left: 35%;
  width: 102px;
  height: 102px;
}

.image4-1 {
  top: -40%;
  right: 0%;
}

.image4-2 {
  top: 50%;
  right: 10%;
  transform: rotate(60deg);
  height: 188px;
  width: 188px;
}

.image4-3 {
  top: 30%;
  right: 40%;
  height: 188px;
  width: 188px;
}

.image4-4 {
  top: 50%;
  right: 30%;
  transform: rotate(60deg);
  height: 151px;
  width: 151px;
}

.image4-5 {
  top: 105%;
  right: 40%;
  height: 151px;
  width: 151px;
}

.image4-6 {
  top: 120%;
  right: 25%;
  transform: rotate(60deg);
  height: 151px;
  width: 151px;
}

.image5-1 {
  top: -60%;
  right: 10%;
  height: 700px;
  transform: rotate(-45deg);
}

.image5-2 {
  top: 10%;
  right: 5%;
  transform: rotate(75deg);
  height: 500px;
}

.image5-3 {
  top: -10%;
  right: -10%;
  height: 600px;
}

.image6-1 {
  transform: scale(0.75);
  bottom: 10%;
  left: 0%;
}

.image6-2 {
  right: 10%;
  bottom: 25%;
}
.image6-3 {
  right: 5%;
  top: -25%;
  height: 400px;
}
.image6-4 {
  right: 30%;
  bottom: 25%;
}

.image6-5 {
  right: 10%;
  bottom: 10%;
  transform: rotate(90deg);
}
.image6-6 {
  display: none;
}

.accordion6-1-1 {
  left: 25%;
  bottom: -10%;
  height: 500px;
  animation: bounce 6s ease-in-out infinite alternate;
}

.accordion6-1-2 {
  right: 15%;
  bottom: 25%;
  height: 375px;
  animation: bounce2 5s ease-in-out infinite alternate;
}

.accordion6-1-3 {
  top: -20%;
  right: 20%;
  height: 500px;
  animation: bounce 6s ease-in-out infinite alternate;
}

.accordion6-1-4 {
  right: -10%;
  bottom: 50%;
  height: 300px;
  animation: bounce2 5s ease-in-out infinite alternate;
}
.accordion6-1-5 {
  right: -15%;
  bottom: -15%;
  height: 500px;
  animation: bounce 6s ease-in-out infinite alternate;
}

.accordion6-1-6 {
  right: 10%;
  top: 55%;
  height: 250px;
  animation: bounce2 5s ease-in-out infinite alternate;
}

.accordion6-2-1 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 800px;
}
.accordion6-2-2 {
  top: 0%;
  right: 17.5%;
  height: 200px;
  rotate: 95deg;
  animation: brain-signal infinite 4.5s;
}
.accordion6-2-3 {
  top: 17.5%;
  right: 12.5%;
  height: 200px;
  rotate: -45deg;
  animation: brain-signal infinite 5s;
}
.accordion6-2-4 {
  top: 37.5%;
  right: 7.5%;
  height: 200px;
  rotate: 160deg;
  animation: brain-signal infinite 5.5s;
}

.accordion6-2-5 {
  top: 5%;
  right: 30%;
  height: 80px;
  rotate: -90deg;
}
.accordion6-2-6 {
  top: 57.5%;
  right: 15%;
  height: 60px;
}
.accordion6-2-7 {
  top: 7.5%;
  right: 10%;
  height: 60px;
  rotate: -45deg;
}
.accordion6-2-8 {
  top: 15%;
  right: 10%;
  height: 60px;
  rotate: 90deg;
}

.accordion6-3-1 {
  top: 60%;
  left: 2.5%;
  height: 220px;
  animation: bounce 6s ease-in-out infinite alternate;
}
.accordion6-3-2 {
  top: 52.5%;
  left: 27.5%;
  height: 250px;
  animation: bounce2 5s ease-in-out infinite alternate;
}
.accordion6-3-3 {
  top: 27.5%;
  left: 35%;
  height: 100px;
  animation: bounce 6s ease-in-out infinite alternate;
}
.accordion6-3-4 {
  top: 25%;
  left: 70%;
  height: 550px;
  animation: bounce2 5s ease-in-out infinite alternate;
}
.accordion6-3-5 {
  top: 10%;
  left: 67.5%;
  height: 150px;
  animation: bounce 6s ease-in-out infinite alternate;
}
.accordion6-3-6 {
  top: -7.5%;
  left: 55%;
  height: 150px;
  rotate: -105deg;
  animation: bounce2 5s ease-in-out infinite alternate;
}
.accordion6-3-7 {
  top: 57.5%;
  left: 13%;
  rotate: 45deg;
  height: 75px;
}
.accordion6-3-8 {
  top: 52.5%;
  left: 16%;
  rotate: 35deg;
  height: 75px;
}
.accordion6-3-9 {
  top: 75%;
  left: 45%;
  rotate: 25deg;
  height: 75px;
}

.image7-1 {
  height: 500px;
  top: -30%;
  right: 5%;
}

.image7-2 {
  left: 0%;
  top: -10%;
  transform: scaleX(-1);
}

.image7-3 {
  left: 50%;
  bottom: 20%;
}

.image7-4 {
  left: 40%;
  bottom: -20%;
}
.image7-5 {
  left: 45%;
  bottom: -20%;
  transform: rotate(90deg);
}
.image7-6 {
  left: 50%;
  bottom: -50%;
}

.accordion7-1-1 {
  top: 40%;
  animation: bounce 6s ease-in-out infinite alternate;
}
.accordion7-1-2 {
  top: 10%;
  left: 20%;
  height: 700px;
  animation: bounce 6s ease-in-out infinite alternate;
}
.accordion7-1-3 {
  top: 12.5%;
  left: 80%;
  animation: bounce2 5s ease-in-out infinite alternate;
}
.accordion7-1-4 {
  top: 35%;
  left: 75%;
  height: 200px;
  animation: bounce2 5s ease-in-out infinite alternate;
}

.accordion7-2-1 {
  height: 200px;
  top: 60%;
  left: 25%;
  animation: bounce2 5s ease-in-out infinite alternate;
}
.accordion7-2-2 {
  top: 55%;
  left: 60%;
  rotate: 100deg;
}
.accordion7-2-3 {
  top: 75%;
  left: 45%;
  rotate: -40deg;
}
.accordion7-2-4 {
  height: 500px;
  top: 40%;
  left: 70%;
  animation: bounce 6s ease-in-out infinite alternate;
}

.accordion7-3-1 {
  top: 70%;
  left: 10%;
  height: 300px;
  animation: bounce 6s ease-in-out infinite alternate;
}
.accordion7-3-2 {
  top: 50%;
  left: 10%;
  animation: bounce2 5s ease-in-out infinite alternate;
}
.accordion7-3-3 {
  top: 10%;
  left: 50%;
  rotate: 45deg;
}
.accordion7-3-4 {
  top: 55%;
  left: 65%;
  animation: bounce2 5s ease-in-out infinite alternate;
}

.accordion7-3-5 {
  top: 20%;
  left: 90%;
  height: 100px;
  animation: bounce 6s ease-in-out infinite alternate;
}
.accordion7-3-6 {
  top: 35%;
  left: 95%;
  height: 100px;
  rotate: 60deg;
}

.accordion7-3-7 {
  top: 50%;
  left: 40%;
  animation: bounce 6s ease-in-out infinite alternate;
}
.accordion7-3-8 {
  top: 65%;
  left: 47.5%;
  rotate: -30deg;
}

@media screen and (max-width: 768px) {
  .image1-1 {
    display: none;
  }
  .image1-2 {
    right: -50%;
    top: 0;
  }
  .image1-3 {
    right: -60%;
    top: 20%;
  }
  .image1-4 {
    transform: scale(0.7);
    right: -80%;
    top: 30%;
  }
  .image1-5 {
    display: none;
  }
  .image1-7 {
    display: none;
  }
  .image1-8 {
    top: 80%;
    right: -5%;
  }
  .image2-1 {
    height: 300px;
    top: -40%;
    right: 30%;
    display: none;
  }
  .image2-2 {
    top: -35%;
    display: none;
  }
  .image2-3 {
    display: none;
  }
  .image2-5 {
    display: none;
  }
  .image3-1,
  .image3-3,
  .image3-2 {
    display: none;
  }
  .image3-4 {
    top: -30%;
    transform: scale(0.2);
  }
  .image3-5 {
    top: 5%;
    left: 0%;
  }
  .image4-1 {
    transform: scale(0.3);
    top: -10%;
  }
  .image4-4 {
    top: 60%;
  }
  .image4-2,
  .image4-3,
  .image4-4,
  .image4-5,
  .image4-6 {
    transform: scale(0.3);
  }

  .image5-1,
  .image5-2,
  .image5-3 {
    transform: scale(0.3);
  }

  .image5-1 {
    top: -40%;
    right: -60%;
  }
  .image5-2 {
    top: 20%;
    right: -30%;
  }
  .image5-3 {
    top: 40%;
    right: 10%;
  }

  .image6-1 {
    top: 20%;
    right: 0%;
  }
  .image6-2 {
    height: 200px;
    top: 60%;
    right: 0%;
  }

  .image6-3 {
    height: 200px;
    top: -18%;
  }

  .image6-4 {
    display: none;
  }

  .image6-5 {
    display: none;
  }

  .image7-1 {
    top: 10%;
    left: 10%;
    height: 200px;
  }

  .image7-6 {
    display: none;
  }
  .accordion6-1-1 {
    height: 200px;
    top: 85%;
    left: 10%;
  }
  .accordion6-1-2 {
    height: 200px;
    left: 30%;
  }
  .accordion6-1-3 {
    height: 200px;
    left: 50%;
    top: -10%;
  }
  .accordion6-1-4 {
    height: 200px;
    left: 70%;
  }

  .accordion6-1-5 {
    height: 200px;
    top: 80%;
    right: -30%;
  }
}
</style>

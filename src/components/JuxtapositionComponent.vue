<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <section>
    <!-- MOBILE (conditionally mounted using emedia query package) -->
    <div
      class="mobile-heading-container"
      v-if="mq.current == 'xs' || mq.current == 'sm'"
    >
      <h2>
        {{ props.heading }}
      </h2>
      <p>
        {{ props.body }}
      </p>
      <p class="instruction">
        {{ props.instruction }}
      </p>
    </div>

    <!-- DESKTOP AND MOBILE (external component 'wrapper') -->
    <ImgComparisonSlider
      class="slider"
      :class="{ bottom: isBottom }"
      @slide="toggleTextContainer($event)"
      :style="{
        backgroundImage: props.images[1].src,
        
      }"
    >
    <!-- custom handle (requires slot="handle") -->
      <img
        src="/assets/img-min/icon-compare.svg"
        slot="handle"
        class="handle"
      />
      <!-- 
        image to the left, requires slot="first" 
        :class="{ 'bottom': isBottom }" is used to position the image on the bottom of the slider if the section title is 'Påverkan'
      -->
      <div
        class="img"
        :class="{ bottom: isBottom }"
        slot="first"
        :style="{
          backgroundImage: props.images[0].src,
          backgroundColor: props.images[0].bgColor,
        }"
      >
        <div
          class="text-container"
          v-if="mq.current != 'sm' && mq.current != 'xs'"
        >
          <p class="page-title">{{ props.title }}</p>
          <h2>
            {{ props.heading }}
          </h2>
          <p class="body">
            {{ props.body }}
          </p>
          <p class="instruction">
            {{ props.instruction }}
          </p>
          <div
            class="text-box first"
            :style="{ backgroundColor: props.images[0].bgColor }"
          >
            <h3>{{ props.textBox[0].heading }}</h3>
            <p>{{ props.textBox[0].body }}</p>
          </div>
        </div>
      </div>
      <div slot="second">
        <div
          class="text-box second"
          :style="{ backgroundColor: props.images[1].bgColor }"
          v-if="mq.current != 'sm' && mq.current != 'xs'"
        >
          <h3>{{ props.textBox[1].heading }}</h3>
          <p>{{ props.textBox[1].body }}</p>
        </div>
      </div>
    </ImgComparisonSlider>
    <!-- MOBILE -->
    <div class="mobile-text-wrapper">
      <div
        class="mobile-text-container"
        :style="{
          backgroundColor: props.images[1].bgColor,
        }"
      >
        <h3>{{ props.textBox[0].heading }}</h3>
        <p>{{ props.textBox[0].body }}</p>
      </div>
      <div
        class="mobile-text-container"
        :style="{
          backgroundColor: props.images[0].bgColor,
        }"
      >
        <h3>{{ props.textBox[1].heading }}</h3>
        <p>{{ props.textBox[1].body }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
import { ref, computed, onMounted } from "vue";
import { useMq } from "vue3-mq";
import gsap from "gsap";


const props = defineProps({
  title: {
    type: String,
  },
  heading: {
    type: String,
    default: "",
  },
  body: {
    type: String,
    default: "",
  },
  instruction: {
    type: String,
    default: "",
  },
  textBox: {
    type: Array,
  },
  images: {
    type: Array,
  },
});

//npm package for using media queries with js
const mq = useMq();

const isBottom = computed(() => (props.title == "Påverkan" ? true : false));

onMounted(() => {
  gsap.to(".mobile-text-container", {
    opacity: 0,
  });
});

// data point to keep track of the slider position
let sliderExposure = 0;

// every time slider is moved, the text container is toggled (on mobile)
const toggleTextContainer = (e) => {
  if(mq.current == 'xs' || mq.current == 'sm'){
    if (sliderExposure <= 50 && e.target.exposure >= 50) {
      gsap.to(".mobile-text-container:nth-child(1)", {
        duration: 0.5,
        opacity: 0,
        y: 40,
        ease: "power2.out",
      });
      gsap.to(".mobile-text-container:nth-child(2)", {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.out",
      });
    } else if (sliderExposure >= 50 && e.target.exposure <= 50) {
      gsap.to(".mobile-text-container:nth-child(2)", {
        duration: 0.5,
        opacity: 0,
        y: 40,
        ease: "power2.out",
      });
      gsap.to(".mobile-text-container:nth-child(1)", {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.out",
      });
    }
  }
  sliderExposure = e.target.exposure;
};
</script>

<style scoped lang="scss">
section {
  padding: 0;
  cursor: ew-resize;
}

.slider {
  position: relative;
  width: 100%;
  height: 100vh;
  background: center center no-repeat;
  background-size: 100%;
  --divider-color: #000;
  --divider-width: 0px;
  &:focus {
    outline: none;
  }
}

.img {
  background: center center no-repeat;
  background-size: 100%;
  height: 100%;
  width: 100%;
}

h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}

.body {
  font-size: 1.5rem;
  font-weight: 500;
}

.bottom {
  background-position: bottom;
}

.text-container {
  height: 100%;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
}

.instruction {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 20px;
}

.text-box {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #000;
  width: 35%;
}

.second {
  position: absolute;
  margin-top: 3%;
  left: 5%;
}

.first {
  position: absolute;
  margin-top: 25%;
  right: 10%;
}

.mobile-text-wrapper {
  display: none;
}

@media screen and (max-width: 768px) {
  .slider {
    max-height: 50vh;
  }

  .mobile-text-wrapper {
    position: relative;
    display: block;
    height: 40vh;
    width: 100%;
  }

  .mobile-heading-container {
    margin: 20px 50px;
  }
  .mobile-text-container {
    position: absolute;
    margin: 20px 30px;
    padding: 12px;
    border-radius: 5px;
    border: solid 2px black;
  }
  .bottom {
    background-size: 200%;
  }
  .handle {
    scale: 0.75;
  }
}
</style>

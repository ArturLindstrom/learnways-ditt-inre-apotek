<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <section>
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
    <ImgComparisonSlider
      class="slider"
      :class="{ bottom: isBottom }"
      @slide="logAttr($event)"
      :style="{
        backgroundImage: props.images[1].src,
        backgroundColor: props.images[1].bgColor,
      }"
    >
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
          <p>
            {{ props.body }}
          </p>
          <p class="instruction">
            {{ props.instruction }}
          </p>
          <div
            class="text-box first"
            :style="{ backgroundColor: props.images[1].bgColor }"
          >
            <h3>{{ props.textBox[0].heading }}</h3>
            <p>{{ props.textBox[0].body }}</p>
          </div>
        </div>
      </div>
      <div slot="second">
        <div
          class="text-box second"
          :style="{ backgroundColor: props.images[0].bgColor }"
          v-if="mq.current != 'sm' && mq.current != 'xs'"
        >
          <h3>{{ props.textBox[1].heading }}</h3>
          <p>{{ props.textBox[1].body }}</p>
        </div>
      </div>
    </ImgComparisonSlider>
    <div
      class="mobile-text-container"
      v-show="(sliderExposure < 49 && mq.current == 'xs') || mq.current == 'sm'"
      :style="{
        backgroundColor: props.images[0].bgColor,
      }"
    >
      <h3>{{ props.textBox[0].heading }}</h3>
      <p>{{ props.textBox[0].body }}</p>
    </div>
    <div
      class="mobile-text-container"
      v-show="(sliderExposure > 50 && mq.current == 'xs') || mq.current == 'sm'"
      :style="{
        backgroundColor: props.images[1].bgColor,
      }"
    >
      <h3>{{ props.textBox[1].heading }}</h3>
      <p>{{ props.textBox[1].body }}</p>
    </div>
  </section>
</template>

<script setup>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
import { ref, computed } from "vue";
import { useMq } from "vue3-mq";

const mq = useMq();

const isBottom = computed(() => props.title == 'Påverkan' ? true : false)

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

const sliderExposure = ref(50);

const logAttr = (e) => {
  sliderExposure.value = e.target.exposure;
};
</script>

<style scoped lang="scss">
section {
  padding: 0;
  cursor: w-resize;
}

.slider {
  position: relative;
  width: 100%;
  height: 100vh;
  background: center center no-repeat;
  background-size: 100%;
  --divider-color: #000;
  --divider-width: 3px;
  --default-handle-color: #000;
  --default-handle-width: 80px;
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
  font-weight: bold;
  margin-top: 20px;
}

.text-box {
  padding: 20px;
  border-radius: 10px;
  width: 35%;
}

.second {
  position: absolute;
  margin-top: 3%;
  left: 5%;
  background-color: #f4e9d7;
}

.first {
  position: absolute;
  margin-top: 25%;
  right: 10%;
  background-color: #bbc19b;
}

@media screen and (max-width: 768px) {
  section {
    padding-bottom: 150px;
  }
  .slider {
    max-height: 200px;
  }

  .mobile-heading-container {
    margin: 20px 50px;
  }
  .mobile-text-container {
    margin: 20px 30px;
    padding: 12px;
    border-radius: 5px;
    border: solid 2px black;
  }
}
</style>
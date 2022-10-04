<template>
  <section class="section">
    <slot></slot>
    <p class="page-title">
      {{ props.title }}
    </p>
    <h2>
      {{ props.heading }}
    </h2>
    <div class="text-wrapper">
      <h4>
        {{ props.question }}
      </h4>
      <div class="button-wrapper">
        <ButtonComponent
          type="quiz"
          @click="answer = 'correct'"
          :class="{
            selected: answer === 'correct',
          }"
        >
          <img src="/assets/img/right.svg" alt="" v-if="answer == 'correct'" />
          {{ props.answers[1].answer }}
        </ButtonComponent>
        <ButtonComponent
          type="quiz"
          @click="answer = 'incorrect'"
          :class="{
            selected: answer === 'incorrect',
          }"
        >
          <img
            src="/assets/img/wrong.svg"
            alt=""
            v-if="answer == 'incorrect'"
          />
          {{ props.answers[0].answer }}
        </ButtonComponent>
      </div>
      <transition>
        <div class="feedback-container" v-if="answer">
          <p v-if="answer == 'correct'" class="feedback">
            {{ props.feedback[1] }}
          </p>
          <p v-if="answer == 'incorrect'" class="feedback">
            {{ props.feedback[0] }}
          </p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ButtonComponent from "./ButtonComponent.vue";
const answer = ref("");


const props = defineProps({
  title: {
    type: String,
  },
  heading: {
    type: String,
    default: "",
  },
  question: {
    type: String,
    default: "",
  },
  answers: {
    type: Array,
    default: () => [],
  },
  feedback: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">

.button-wrapper {
  display: flex;
  gap: 20px;
}

.text-wrapper {
  max-width: 70%;
}

img {
  position: absolute;
  top: -30%;
  right: -5%;
}

h2 {
  margin-bottom: 46px;
  width: 70%;
}

h4 {
  margin-bottom: 46px;
}

.feedback {
  margin-top: 46px;
  width: 70%;
}

.selected {
  background-color: #362917;
  color: white;
  transition: all 0.5s ease;
}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media screen and (max-width: 768px) {

  .section {
    justify-content: flex-start;
  }
  .text-wrapper {
    max-width: 100%;
  }

  .button-wrapper {
    justify-content: space-between;
  }

  h2,
  h4 {
    width: 100%;
    margin-bottom: 20px;
  }

  .feedback {
    margin: 0;
    width: 100%;
  }

  .feedback-container {
    margin-top: 30px;
    padding: 10px;
    background: #f0ede9;
    border: 1px black solid;
    border-radius: 5px;
  }
}
</style>

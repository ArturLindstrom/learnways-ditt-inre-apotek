<template>
  <a href="#Historia" v-if="props.type == 'scroll'">
    <button @click="onClick" class="button">
      <slot></slot>
      <button v-if="props.type == 'scroll'" class="scroll" />
    </button>
  </a>
  <button v-else @click="onClick" class="button">
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const onAnswer = ref();

const onClick = () => {
  if (props.type == "scroll") {
    window.scrollTo({
      top: window.innerHeight + 100,
      behavior: "smooth",
    });
  }

  if (props.type == "quiz") {
    if (props.correct) {
      onAnswer.value = "correct";
    } else {
      onAnswer.value = "incorrect";
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  position: relative;
  min-width: 200px;
  border: 2px solid black;
  border-radius: 4px;
  padding: 10px 15px;
  background-color: white;
  font-family: "Apercu";
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

a {
  text-decoration: none;
}

.scroll {
  all: unset;
  border: 2px solid black;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: url(/assets/scrollButtonArrow.svg) no-repeat center;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .button {
    min-width: 120px;
  }
}
</style>

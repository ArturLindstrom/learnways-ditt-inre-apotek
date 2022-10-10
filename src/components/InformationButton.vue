<template>
  <button class="button" @click="openInfo" :class="{ active: buttonToggle }">
    <p v-if="!buttonToggle">i</p>
  </button>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const emit = defineEmits(["openInfo"]);

const buttonToggle = ref(false);

//toggles the information component and hides the nav button
const openInfo = () => {
  store.commit("toggleNav");
  buttonToggle.value = !buttonToggle.value;
  emit("openInfo");
};
</script>

<style scoped lang="scss">
.button {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 0;
  margin-top: 54px;
  margin-left: 54px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  color: #5e5c7c;
  border: 1px solid #535271;
  background: white;
  cursor: pointer;
}
.active {
  background: url(/assets/navButton/navButtonActive.svg) center no-repeat;
  border-radius: 5px;
}

@media screen and (max-width: 768px) {
  .button {
    -webkit-tap-highlight-color: transparent;
    margin-top: 12px;
    margin-left: 12px;
    width: 25px;
    height: 25px;
  }
}
</style>

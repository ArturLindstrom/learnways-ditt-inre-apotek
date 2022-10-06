<template>
  <section>
    <ParallaxComponent :section="1" />
    <InformationButton @openInfo="showInfo = !showInfo" />
    <div class="text-container">
      <h1>{{ data.dia_p1_h1 }}</h1>
      <h5>
        {{ data.dia_p1_ingress }}
      </h5>
      <ButtonComponent type="scroll">{{ data.scroll }}</ButtonComponent>
    </div>
    <transition>
      <InformationComponent v-if="showInfo" />
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import ButtonComponent from "./ButtonComponent.vue";
import InformationComponent from "./InformationComponent.vue";
import InformationButton from "./InformationButton.vue";
import ParallaxComponent from "./ParallaxComponent.vue";
import gsap from "gsap";


onMounted(() => {
  gsap.from(".text-container", {
    opacity: 0,
    duration: 1,
  })
})

const showInfo = ref(false);

const store = useStore();

const data = store.state.data;
</script>

<style scoped lang="scss">
section {
  justify-content: center;
  padding-top: 0;
}

.text-container {
  max-width: 65%;
}

h1 {
  margin-bottom: 40px;
}

h5 {
  margin-bottom: 40px;
  font-weight: 300;
  max-width: 80%;
}

.v-enter-active,
.v-leave-active {
  transition: transform 1s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}

@media screen and (max-width: 768px) {
  .text-container {
    max-width: 100%;
  }
}
</style>

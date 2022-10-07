<template>
  <section>
    <slot></slot>
    <p class="page-title" v-if="props.title">
      {{ props.title }}
    </p>
    <div class="text-wrapper">
      <h2>
        {{ props.heading }}
      </h2>
      <p>
        {{ props.body }}
      </p>
      <p class="read-more" @click="openModal" @keyup.enter="openModal" tabindex="0">
        {{ props.readMore }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

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
  readMore: {
    type: String,
    default: "",
  },
  modal: {
    type: Object,
    default: () => {},
  },
});

const modalContent = computed(() => props.modal);

const openModal = () => {
  store.commit("modalOpen", modalContent);
};
</script>

<style scoped lang="scss">
section {
  align-items: flex-end;
}
.text-wrapper {
  max-width: 50%;
}

@media screen and (max-width: 768px) {
  section {
    align-items: center;
    padding-top: 0;
    min-height: 0;
  }
  .text-wrapper {
    max-width: 100%;
  }
}
</style>

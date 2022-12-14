<template>
  <section ref="section" :class="setClass">
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
    </div>
    <div class="accordion-container">
      <div
        class="accordion"
        v-for="(button, i) in props.buttons"
        :key="i"
        :class="{
          'selected': isSelected === i + 1,
          'not-selected': isSelected && isSelected !== i + 1,
        }"
        @click.self="toggleAccordion(i)"
        :style="{
          backgroundColor: color,
        }"
        tabindex="0"
        @keyup.enter="toggleAccordion(i)"
      >
        <h5 @click.self="toggleAccordion(i)">
          {{ button.heading }}
        </h5>
        <transition>
          <div class="transition">
            <p>
              {{ button.body }}
            </p>
            <p class="read-more" 
            @click="openModal(button.modal)"
            @keyup.enter="openModal(button.modal)"
            :tabindex="isSelected === i + 1 ? 0 : -1"
            >
              {{ button.readMore }}
            </p>
          </div>
        </transition>
      </div>
    </div>
    <slot></slot>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["changeColor"]);

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
  buttons: {
    type: Array,
    default: () => [],
  },
  type: {
    type: String,
    default: "",
  },
});

// variable containing which accordion is selected
const isSelected = ref(null);

// template ref for section
const section = ref(null);

const openModal = (modalContent) => {
  store.commit("modalOpen", modalContent);
};

// takes the prop "type", which is the title of the section, and sets it as a class
const setClass = computed(() => {
  return props.type.toLowerCase();
});

// logic for which accordions are opened and closed
const toggleAccordion = (i) => {
  if (isSelected.value === i + 1) {
    isSelected.value = null;
  } else {
    isSelected.value = i + 1;
  }
  if (setClass.value == "funktioner") {
    store.commit("setAccordion", isSelected.value);
  } else {
    store.commit("setAccordion2", isSelected.value);
  }
  // sets the data-color attribute to new color from the color computed property
  section.value.dataset.color = color.value;
  // emits a signal to the parent component to restart the gsap scrollTrigger for background color on HomeView
  emit("changeColor");
};


// changes section background when a specific accordion is selected
const color = computed(() => {
  switch (setClass.value) {
    case "funktioner":
      switch (isSelected.value) {
        case null:
          return "#DEB881";
        case 1:
          return "#BBC19B";
        case 2:
          return "#AEA2B2";
        case 3:
          return "#A7C6B7";
        default:
          return "#DEB881";
      }
    case "begrepp":
      switch (isSelected.value) {
        case null:
          return "#AEA2B2";
        case 1:
          return "#CFE0DF";
        case 2:
          return "#DAD1DD";
        case 3:
          return "#B2CCCC";
        default:
          return "#AEA2B2";
      }
    default:
      return "purple";
  }
});

</script>

<style scoped lang="scss">
.section {
  justify-content: flex-start;
}

.begrepp {
  margin-top: 20rem;
}

.page-title {
  margin-top: -6rem;
}
.button-wrapper {
  display: flex;
  margin-top: 2rem;
}
.accordion-container {
  display: flex;
  gap: 20px;
}

h2 {
  width: 80%;
}

h5 {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.2rem;
}

.accordion {
  max-width: 350px;
  max-height: 30px;
  padding: 1rem;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 42px;
  transition: all 0.5s ease-in-out;
}

.selected {
  padding: 1rem;
  max-height: 900px;
  pointer-events: initial;
  cursor: text;
  transition: all 0.5s ease-in;
}

.not-selected {
  padding: 1rem;
  max-height: 30px;
  transition: all 0.5s ease-in;
  overflow: hidden;
}

.transition {
  margin-top: 20px;
}
@media screen and (max-width: 768px) {
  .accordion-container {
    flex-direction: column;
    -webkit-tap-highlight-color: transparent;
  }

  h2 {
    width: 100%;
  }

  .not-selected {
    max-height: 30px;
  }

  .accordion {
    max-height: 30px;
    margin-top: 20px;
  }

  .selected {
    max-height: 900px;
  }
}
</style>

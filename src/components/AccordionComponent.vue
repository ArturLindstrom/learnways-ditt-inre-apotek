<template>
    <section ref="background" :class="setClass">
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
          selected: isSelected === i + 1,
          'not-selected': isSelected && isSelected !== i + 1,
        }"
        @click.self="toggleAccordion(i)"
      >
        <h5 @click.self="toggleAccordion(i)">
          {{ button.heading }}
        </h5>
        <transition>
          <div class="transition">
            <p>
              {{ button.body }}
            </p>
            <p class="read-more" @click="openModal(button.modal)">
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


const isSelected = ref(null);

const buttonClicked = ref(0);

const background = ref(null)

const openModal = (modalContent) => {
  store.commit("modalOpen", modalContent);
};

const setClass = computed(() => {
  return props.type.toLowerCase();
});

const emit = defineEmits(["changeColor"]);

const color = computed(() => {
  switch(setClass.value) {
    case "funktioner":
      switch(isSelected.value) {
        case null: return '#DEB881';
        case 1: return '#BBC19B';
        case 2: return '#AEA2B2'
        case 3: return '#A7C6B7'
        default: return '#DEB881';
      }
    case "begrepp":
      switch(isSelected.value) {
        case null: return '#AEA2B2';
        case 1: return '#CFE0DF';
        case 2: return '#DAD1DD'
        case 3: return '#B2CCCC'
        default: return '#AEA2B2';
      }
    default: return "purple";
  }
})

const toggleAccordion = (i) => {
  if (isSelected.value === i + 1) {
    isSelected.value = null;
  } else {
    isSelected.value = i + 1;
    buttonClicked.value = i + 1;
  }
  if (setClass.value == "funktioner") {
    store.commit("setAccordion", isSelected.value);
  } else {
    store.commit("setAccordion2", isSelected.value);
  }
  background.value.dataset.color = color.value;

  emit('changeColor')
};

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
  /* justify-content: flex-start; */
  gap: 20px;
}

h2 {
  width: 80%;
}

/* make h5 uppercase */
h5 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
}

.accordion {
  max-width: 350px;
  /* height: 50px; */
  max-height: 30px;
  padding: 1rem;
  background-color: transparent;
  /* background-color: white; */
  border: 2px solid black;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 42px;
  transition: max-height 0.5s ease-in;
  transition: background-color 0.2s ease-in;
}

.selected {
  /* height: auto; */
  padding: 1rem;
  max-height: 900px;
  pointer-events: initial;
  background-color: transparent;
  cursor: text;
  transition: max-height ease-in 0.5s;
  transition: background-color 0.2s ease-in;
}

.selected {
  background: rgba(255, 255, 255, 0.40);
}


.not-selected {
  /* height: 50px; */
  padding: 1rem;
  max-height: 30px;
  transition: max-height 0.5s ease-in;
  overflow: hidden;
}

.transition {
  margin-top: 20px;
}
@media screen and (max-width: 768px) {
  .accordion-container {
    flex-direction: column;
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

<template>
  <section>
    <InformationButton @openInfo="showInfo = !showInfo" />
    <p class="page-title">
      {{ data.dia_i_11 }}
    </p>
    <h3 class="heading">
      {{ data.dia_11_h2 }}
    </h3>
    <div class="text-grid">
      <div class="grid-items">
        <h3>
          {{ data.dia_11_h3_1 }}
        </h3>
        <p>
          {{ data.dia_11_p2 }}
        </p>
        <button class="footer-button" @click="copy">
          {{ linkClicked ? "länk kopierad!" : data.dia_open_link_02 }}
        </button>
      </div>
      <div class="grid-items">
        <h3>
          {{ data.dia_11_h3 }}
        </h3>
        <p>
          {{ data.dia_11_p1 }}
        </p>
        <a href="https://www.antibiotikaellerinte.se/" target="_blank">
          <button class="footer-button">
            {{ data.dia_open_link_01 }}
          </button>
        </a>
      </div>
    </div>
    <transition>
      <InformationComponent v-if="showInfo" />
    </transition>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import InformationButton from "./InformationButton.vue";
import InformationComponent from "./InformationComponent.vue";
const showInfo = ref(false);
const store = useStore();
const data = store.state.data;
const linkClicked = ref(false);

const copy = () => {
  linkClicked.value = true;
  navigator.clipboard.writeText("https://www.dittinreapotek.se");
};
</script>

<style scoped lang="scss">
p,
h2,
h3,
button,
.page-title {
  color: white;
}

section {
  background-color: #5e5c7c;
}

.heading {
  /* text-align: center;  */
  align-self: flex-start;
  width: 60%;
  margin-left: 100px;
}

.page-title {
  align-self: flex-start;
}

.text-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  place-items: start;
  gap: 200px;
  padding: 0 100px;
}

.grid-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 400px;
}

.footer-button {
  background: transparent;
  border: 2px solid white;
  font-size: 18px;
  font-weight: 700;
  padding: 15px;
  min-width: 350px;
  border-radius: 5px;
  margin-top: 27px;
  cursor: pointer;
  text-transform: uppercase;
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
  .text-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0;
  }

  .heading {
    width: 100%;
    margin-left: 0;
  }
  .footer-button {
    min-width: 200px;
    margin: 20px 0 0 0;
  }
}
</style>

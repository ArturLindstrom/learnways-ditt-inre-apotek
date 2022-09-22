<template>
  <section>
    <InformationButton @openInfo="showInfo = !showInfo"/>
    <p class=page-title>
      {{data.dia_i_11}}
    </p>
    <h2>
      {{data.dia_11_h2}}
    </h2>
    <div class="text-grid">
      <div class="grid-1">
        <h3>
          {{data.dia_11_h3_1}}
        </h3>
        <p>
          {{data.dia_11_p2}}
        </p>
        <button class="footer-button">
          {{data.dia_open_link_02}}
        </button>
      </div>
      <div class="grid-2">
        <h3>
          {{data.dia_11_h3}}
        </h3>
        <p>
          {{data.dia_11_p1}}
        </p>
        <a href="https://www.antibiotikaellerinte.se/" target="_blank">
          <button class="footer-button">
            {{data.dia_open_link_01}}
          </button>
        </a>
      </div>
    </div>
    <transition>
        <InformationComponent v-if="showInfo"/>
    </transition>
  </section>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import InformationButton from './InformationButton.vue';
import InformationComponent from './InformationComponent.vue';
const showInfo = ref(false)
const store = useStore();
const data = store.state.data
</script>

<style scoped lang='scss'>
p,
h2,
h3,
button,
.page-title {
  color: white
}

section {
  background-color: #5E5C7C;
  display: flex;
  flex-direction: column;
  align-items: center;
  

}

h2{
  text-align: center; 
  width: 70%;
}

.text-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center center;
  gap: 200px;
  padding: 0 100px;
}

.footer-button{
  background: transparent;
  border: 2px solid white;
  font-size: 18px;
  font-weight: 700;
  padding: 15px;
  width: 350px;
  border-radius: 5px;
  margin-top: 27px;

}
.v-enter-active,
.v-leave-active {
  transition: transform 1s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
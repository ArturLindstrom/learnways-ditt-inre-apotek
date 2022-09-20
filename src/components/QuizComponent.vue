<template>
<section>
  <p class="page-title">
    {{data.dia_i_03}}
  </p>
  <h2>
    {{data.dia_03_h2}}
  </h2>
  <p>
    {{data.dia_03_p1}}
  </p>
  <div class="button-wrapper" >
    <ButtonComponent type="quiz" 
    @click="answer = 'incorrect'"
    :correct="true">
      {{data.dia_03_q_1}}
    </ButtonComponent>
    <ButtonComponent type="quiz" @click="answer = 'correct'">
      {{data.dia_03_q_2}}
    </ButtonComponent>
  </div>
  <p v-if="answer == 'correct'">
    {{data.q_feedback_1_2}}
  </p>
  <p v-if="answer == 'incorrect'">
    {{data.q_feedback_1_1}}
  </p>
  </section>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
const store = useStore();
const data = store.state.data;

const answer = ref('')

</script>

<style scoped lang='scss'>
.button-wrapper{
  display: flex;
}
</style>
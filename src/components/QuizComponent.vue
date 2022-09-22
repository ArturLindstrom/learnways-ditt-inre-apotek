<template>
<section>
  <p class="page-title">
    {{props.title}}
  </p>
  <h2>
    {{props.heading}}
  </h2>
  <div class="text-wrapper">
    <h4>
      {{props.question}}
    </h4>
    <div class="button-wrapper" >
      <ButtonComponent type="quiz" v-for="answer in props.answers" :key="answer" 
      @click="checkAnswer(answer)"
      >
      
        {{answer.answer}}
        <img :src="path" alt="">
      </ButtonComponent>
      <!-- <ButtonComponent type="quiz"
      @click="answer = 'incorrect'"
      >
      <img src="assets/img/wrong.svg" alt="" v-if="answer == 'incorrect'">
        {{data.dia_03_q_1}}
      </ButtonComponent>
      <ButtonComponent type="quiz" @click="answer = 'correct'">
        <img src="assets/img/right.svg" alt="" v-if="answer == 'correct'">
        {{data.dia_03_q_2}}
      </ButtonComponent> -->
    </div>
    <p v-if="answer == 'correct'">
      {{props.feedback[1]}}
    </p>
    <p v-if="answer == 'incorrect'">
      {{props.feedback[0]}}
    </p>
  </div>
  </section>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
const store = useStore();
const data = store.state.data;
const path = ref('')
const answerShown = ref(0)
const answer = ref('')
const checkAnswer = (clickedAnswer) =>{
  if(clickedAnswer.correct){
    answer.value = 'correct'
    path.value = 'assets/img/right.svg'
  } else {
    answer.value = 'incorrect'
    path.value = 'assets/img/wrong.svg'
  }
}


const props = defineProps({
  title: {
    type: String,
  },
  heading: {
    type: String,
    default: ''
  },
  question: {
    type: String,
    default: ''
  },
  answers: {
    type: Array,
    default: ''
  },
  feedback: {
    type: Array,
    default: []
  },
  
})


</script>

<style scoped lang='scss'>
  section{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #F0EDE9;
  }
.button-wrapper{
  display: flex;
  gap: 20px;
}

.text-wrapper{
  max-width: 70%;
}

img{
  position: absolute;
  top: -30%;
  right: -5%;
}

h2{
  margin-bottom: 46px;
}

h4{
  margin-bottom: 46px;
}

p{
  margin-top: 46px;
}
</style>
<template>
<StartComponent id="Start"/>
<DialogComponent id="Historia"/>
<QuizComponent 
id="Arter"
:title="data.dia_i_03"
:heading="data.dia_03_h2"
:question="data.dia_03_p1"
:answers="[{answer: data.dia_03_q_1, correct: false}, 
{answer: data.dia_03_q_2, correct: true}]"
:feedback="[data.q_feedback_1_1, data.q_feedback_1_2]"

/>
<TextComponent 
:heading="data.dia_03_h2_2" 
:body="data.dia_03_p2" 
:readMore="data.dia_03_p3" 
:modal="{heading:data.dia_popup_h_p03, body:data.dia_popup_p_p03}" />
<AccordionComponent
id="Funktioner"
:title="data.dia_i_04"
:heading="data.dia_04_h2"
:body="data.dia_04_p"
:buttons="[
  {heading: data.dia_04_p1,
  body: data.q_feedback_4_1,
  readMore: data.q_feedback_4_1_1,
  modal: {heading:data.dia_popup_h_p04_01, body:data.dia_popup_p_p04_01}},

  {heading: data.dia_04_p2,
  body: data.q_feedback_4_2,
  readMore: data.q_feedback_4_1_1,
  modal: {heading:data.dia_popup_h_p04_02, body:data.dia_popup_p_p04_02}},
  
  {heading: data.dia_04_p3,
  body: data.q_feedback_4_3,
  readMore: data.q_feedback_4_1_1,
  modal: {heading:data.dia_popup_h_p04_03, body:data.dia_popup_p_p04_03}},
  ]"
/>
<JuxtaPositionComponent 
id="Dysbios"
:title="data.dia_i_06"
:heading="data.dia_06_h2"
:body="data.dia_06_p1"
:instruction="data.dia_instruction"
:textBox="[{heading: data.dia_06_h3_01, body: data.juxta_01_1},
{heading: data.dia_06_h3_02, body: data.juxta_01_2}]" 
/>
</template>

<script setup>
import StartComponent from '../components/StartComponent.vue';
import DialogComponent from '../components/DialogComponent.vue';
import QuizComponent from '../components/QuizComponent.vue';
import TextComponent from '../components/TextComponent.vue';
import { useStore } from 'vuex';
import AccordionComponent from '../components/AccordionComponent.vue';
import JuxtaPositionComponent from '../components/juxtaPositionComponent.vue';

const store = useStore();
const data = store.state.data;


</script>

<style scoped lang='scss'>

</style>
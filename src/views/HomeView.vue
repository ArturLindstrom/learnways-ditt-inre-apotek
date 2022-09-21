<template>
<StartComponent/>
<DialogComponent/>
<QuizComponent/>
<TextComponent 
:heading="data.dia_03_h2_2" 
:body="data.dia_03_p2" 
:readMore="data.dia_03_p3" 
:modal="{heading:data.dia_popup_h_p03, body:data.dia_popup_p_p03}" />
<AccordionComponent
:title="data.dia_i_04"
:heading="data.dia_04_h2"
:body="data.dia_04_p"
:buttons="[
  {heading: data.dia_04_p1,
  body: data.q_feedback_4_1},
  {heading: data.dia_04_p2,
  body: data.q_feedback_4_2},
  {heading: data.dia_04_p3,
  body: data.q_feedback_4_3},
  ]"
>

</AccordionComponent>
</template>

<script setup>
import StartComponent from '../components/StartComponent.vue';
import DialogComponent from '../components/DialogComponent.vue';
import QuizComponent from '../components/QuizComponent.vue';
import TextComponent from '../components/TextComponent.vue';
import { useStore } from 'vuex';
import AccordionComponent from '../components/AccordionComponent.vue';

const store = useStore();
const data = store.state.data;


</script>

<style scoped lang='scss'>

</style>
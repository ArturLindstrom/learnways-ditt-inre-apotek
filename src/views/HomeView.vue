<template>
<div class="container">
  <StartComponent id="Start" class="section"
  data-color="#F4E9D7"/>
  <DialogComponent id="Historia" class="section"
  data-color="#CFE0DF"/>
  <QuizComponent
  id="Arter"
  class="section"
  data-color="#F0EDE9"
  :title="data.dia_i_03"
  :heading="data.dia_03_h2"
  :question="data.dia_03_p1"
  :answers="[{answer: data.dia_03_q_1, correct: false},
  {answer: data.dia_03_q_2, correct: true}]"
  :feedback="[data.q_feedback_1_1, data.q_feedback_1_2]"
  />
  
  <TextComponent
  class="section"
  :heading="data.dia_03_h2_2"
  :body="data.dia_03_p2"
  :readMore="data.dia_03_p3"
  :modal="{heading:data.dia_popup_h_p03, body:data.dia_popup_p_p03}" 
  />
  <AccordionComponent
  id="Funktioner"
  class="section"
  data-color="#DEB881"
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
  data-color="#BBC19B"
  :title="data.dia_i_06"
  :heading="data.dia_06_h2"
  :body="data.dia_06_p1"
  :instruction="data.dia_instruction"
  :textBox="[{heading: data.dia_06_h3_01, body: data.juxta_01_1},
  {heading: data.dia_06_h3_02, body: data.juxta_01_2}]"
  :images="[{src:'url(assets/img/juxtaposition1-01-1.png)', bgColor: '#F4E9D7'},
  {src:'url(assets/img/juxtaposition1-01-2.png)', bgColor: '#BBC19B'}]"
  />
  
  <QuizComponent
  id="Antibiotika"
  class="section"
  data-color="#F0EDE9"
  :title="data.dia_i_07"
  :heading="data.dia_07_h2"
  :question="data.dia_07_p1"
  :answers="[{answer: data.dia_07_q_1, correct: false},
  {answer: data.dia_07_q_2, correct: true}]"
  :feedback="[data.q_feedback_2_1, data.q_feedback_2_2]"
  />
  
  <AccordionComponent
  id="Begrepp"
  class="section"
  data-color="#AEA2B2"
  :title="data.dia_i_08"
  :heading="data.dia_08_h1"
  :body="data.dia_08_p"
  :buttons="[
    {heading: data.dia_08_p1,
    body: data.q_feedback_8_1,
    readMore: data.q_feedback_4_1_1,
    modal: {heading:data.dia_popup_h_p08_01, body:data.dia_popup_p_p08_01}},
  
    {heading: data.dia_08_p2,
    body: data.q_feedback_8_2,
    readMore: data.q_feedback_4_1_1,
    modal: {heading:data.dia_popup_h_p08_02, body:data.dia_popup_p_p08_02}},
  
    {heading: data.dia_08_p3,
    body: data.q_feedback_8_3,
    readMore: data.q_feedback_4_1_1,
    modal: {heading:data.dia_popup_h_p08_03, body:data.dia_popup_p_p08_03}},
    ]"
  />
  
  <QuizComponent
  id="Avföring"
  class="section"
  data-color="#F0EDE9"
  :title="data.dia_i_09"
  :heading="data.dia_09_h2"
  :question="data.dia_09_p1"
  :answers="[{answer: data.dia_09_q_1, correct: false},
  {answer: data.dia_09_q_2, correct: true}]"
  :feedback="[data.q_feedback_3_1, data.q_feedback_3_2]"
  />
  
  <JuxtaPositionComponent
  id="Påverkan"
  data-color="#F8D9D9"
  :title="data.dia_i_10"
  :heading="data.dia_10_h2"
  :body="data.dia_10_p1"
  :instruction="data.dia_instruction"
  :textBox="[{heading: data.dia_10_h3_01, body: data.dia_10_p1},
  {heading: data.dia_10_h3_02, body: data.dia_10_p_02}]"
  :images="[{src:'url(assets/img/juxtaposition2-01-1.png)', bgColor: '#F8D9D9'},
  {src:'url(assets/img/juxtaposition2-01-2.png)', bgColor: '#FCEBEA'}]"
  />
</div>

<FooterComponent id="Avslutning"/>
</template>

<script setup>
import StartComponent from '../components/StartComponent.vue';
import DialogComponent from '../components/DialogComponent.vue';
import QuizComponent from '../components/QuizComponent.vue';
import TextComponent from '../components/TextComponent.vue';
import AccordionComponent from '../components/AccordionComponent.vue';
import JuxtaPositionComponent from '../components/juxtaPositionComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


onMounted(() => { 
  
  gsap.utils.toArray('.section').forEach((section, i) => {
  
  if(section.getAttribute('data-color') !== null) {
    
    var colorAttr = section.getAttribute('data-color')
    
    gsap.to(".container", {
      backgroundColor: colorAttr, 
      immediateRender: false,
      scrollTrigger: {
        trigger: section,
        scrub: true,
        start:'top bottom',
        end: '+=100%'
      }
    });

  }
  
});

})





const store = useStore();
const data = store.state.data;


// for (let i = 0; i < colors.length; i++) {
  
//   gsap.to(".container", {
//     backgroundColor: colors[i],
//     scrollTrigger: {
//       trigger: `.section-${i + 1}`,
//       scroller: ".container",
//       scrub: true
//     }
//   });
// }

</script>

<style scoped lang='scss'>

</style>
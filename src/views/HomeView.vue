<template>
  <div class="container" ref="container">
    <StartComponent id="Start" class="section" data-color="#F4E9D7" />
    <DialogComponent id="Historia" class="section" data-color="#CFE0DF" />
    <QuizComponent
      id="Arter"
      class="section"
      data-color="#F0EDE9"
      :title="data.dia_i_03"
      :heading="data.dia_03_h2"
      :question="data.dia_03_p1"
      :answers="[
        { answer: data.dia_03_q_1, correct: false },
        { answer: data.dia_03_q_2, correct: true },
      ]"
      :feedback="[data.q_feedback_1_1, data.q_feedback_1_2]"
    >
      <ParallaxComponent :section="2" />
    </QuizComponent>
    <TextComponent
      class="section"
      :heading="data.dia_03_h2_2"
      :body="data.dia_03_p2"
      :readMore="data.dia_03_p3"
      :modal="{ heading: data.dia_popup_h_p03, body: data.dia_popup_p_p03 }"
    >
      <ParallaxComponent :section="3" />
    </TextComponent>
    <AccordionComponent
      id="Funktioner"
      type="Funktioner"
      class="section"
      data-color="#DEB881"
      @changeColor="(payload) => changeColor(payload)"
      :title="data.dia_i_04"
      :heading="data.dia_04_h2"
      :body="data.dia_04_p"
      :buttons="[
        {
          heading: data.dia_04_p1,
          body: data.q_feedback_4_1,
          readMore: data.q_feedback_4_1_1,
          modal: {
            heading: data.dia_popup_h_p04_01,
            body: data.dia_popup_p_p04_01,
          },
        },

        {
          heading: data.dia_04_p2,
          body: data.q_feedback_4_2,
          readMore: data.q_feedback_4_1_1,
          modal: {
            heading: data.dia_popup_h_p04_02,
            body: data.dia_popup_p_p04_02,
          },
        },

        {
          heading: data.dia_04_p3,
          body: data.q_feedback_4_3,
          readMore: data.q_feedback_4_1_1,
          modal: {
            heading: data.dia_popup_h_p04_03,
            body: data.dia_popup_p_p04_03,
          },
        },
      ]"
    >
      <ParallaxComponent :section="6" />
    </AccordionComponent>
    <JuxtapositionComponent
      id="Dysbios"
      class="section"
      data-color="#BBC19B"
      :title="data.dia_i_06"
      :heading="data.dia_06_h2"
      :body="data.dia_06_p1"
      :instruction="data.dia_instruction"
      :textBox="[
        { heading: data.dia_06_h3_01, body: data.juxta_01_1 },
        { heading: data.dia_06_h3_02, body: data.juxta_01_2 },
      ]"
      :images="[
        {
          src: 'url(assets/img-min/juxtaposition1-01-1.png)',
          bgColor: '#F4E9D7',
        },
        {
          src: 'url(assets/img-min/juxtaposition1-01-2.png)',
          bgColor: '#BBC19B',
        },
      ]"
    />

    <QuizComponent
      id="Antibiotika"
      class="section"
      data-color="#F0EDE9"
      :title="data.dia_i_07"
      :heading="data.dia_07_h2"
      :question="data.dia_07_p1"
      :answers="[
        { answer: data.dia_07_q_1, correct: false },
        { answer: data.dia_07_q_2, correct: true },
      ]"
      :feedback="[data.q_feedback_2_1, data.q_feedback_2_2]"
    >
      <ParallaxComponent :section="4" />
    </QuizComponent>

    <AccordionComponent
      id="Begrepp"
      type="Begrepp"
      class="section"
      data-color="#AEA2B2"
      @change-color="changeColor"
      :title="data.dia_i_08"
      :heading="data.dia_08_h1"
      :body="data.dia_08_p"
      :buttons="[
        {
          heading: data.dia_08_p1,
          body: data.q_feedback_8_1,
          readMore: data.q_feedback_4_1_1,
          modal: {
            heading: data.dia_popup_h_p08_01,
            body: data.dia_popup_p_p08_01,
          },
        },

        {
          heading: data.dia_08_p2,
          body: data.q_feedback_8_2,
          readMore: data.q_feedback_4_1_1,
          modal: {
            heading: data.dia_popup_h_p08_02,
            body: data.dia_popup_p_p08_02,
          },
        },

        {
          heading: data.dia_08_p3,
          body: data.q_feedback_8_3,
          readMore: data.q_feedback_4_1_1,
          modal: {
            heading: data.dia_popup_h_p08_03,
            body: data.dia_popup_p_p08_03,
          },
        },
      ]"
    >
      <ParallaxComponent :section="7" />
    </AccordionComponent>

    <QuizComponent
      id="Avföring"
      class="section"
      data-color="#F0EDE9"
      :title="data.dia_i_09"
      :heading="data.dia_09_h2"
      :question="data.dia_09_p1"
      :answers="[
        { answer: data.dia_09_q_1, correct: false },
        { answer: data.dia_09_q_2, correct: true },
      ]"
      :feedback="[data.q_feedback_3_1, data.q_feedback_3_2]"
    >
      <ParallaxComponent :section="5" />
    </QuizComponent>

    <JuxtapositionComponent
      id="Påverkan"
      class="section"
      data-color="#F8D9D9"
      :title="data.dia_i_10"
      :heading="data.dia_10_h2"
      :body="data.dia_10_p1"
      :instruction="data.dia_instruction"
      :textBox="[
        { heading: data.dia_10_h3_01, body: data.dia_10_p1 },
        { heading: data.dia_10_h3_02, body: data.dia_10_p_02 },
      ]"
      :images="[
        {
          src: 'url(assets/img-min/juxtaposition2-01-1.png)',
          bgColor: '#FCEBEA',
        },
        {
          src: 'url(assets/img-min/juxtaposition2-01-2.png)',
          bgColor: '#F8D9D9',
        },
      ]"
    />
    <ModalComponent> </ModalComponent>
    <FooterComponent id="Avslutning" class="section" data-color="#5E5C7C" />
  </div>
</template>

<script setup>
import StartComponent from "../components/StartComponent.vue";
import DialogComponent from "../components/DialogComponent.vue";
import QuizComponent from "../components/QuizComponent.vue";
import TextComponent from "../components/TextComponent.vue";
import AccordionComponent from "../components/AccordionComponent.vue";
import JuxtapositionComponent from "../components/JuxtapositionComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import { useStore } from "vuex";
import { onMounted, ref, computed } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxComponent from "../components/ParallaxComponent.vue";
gsap.registerPlugin(ScrollTrigger);

const container = ref(null);

onMounted(() => {
  animation();
});

const animation = () => {
  gsap.utils.toArray(".section").forEach((section) => {
    if (section.getAttribute("data-color") !== null) {
      var colorAttr = section.getAttribute("data-color");
      gsap.to(container.value, {
        backgroundColor: colorAttr,
        immediateRender: false,
        scrollTrigger: {
          trigger: section,
          onUpdate: () => sectionChecker(section),
          scrub: true,
          start: "top bottom",
          end: "+=100%",
        },
      });
    }
  });
};

const sectionChecker = (section) => {
  if (window.scrollY < 50) {
    store.commit("setSection", document.getElementById("Start"));
  } else {
    store.commit("setSection", section);
  }
};

const changeColor = () => {
  gsap.killTweensOf(container.value);
  animation();
};

const store = useStore();
const data = store.state.data;
</script>

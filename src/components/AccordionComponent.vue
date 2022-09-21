<template>
    <section>
        <p class="page-title" v-if="props.title">
            {{props.title}}
        </p>
        <div class="text-wrapper">
            <h2>
                {{props.heading}}
            </h2>
            <p>
                {{props.body}}
            </p>
           
        </div>
        <div class="button-wrapper">
          <AccordionButton v-for="(button,i) in props.buttons" :key="button"
          :class="'button' + (i+1)"
          :heading="button.heading"
          :body="button.body">
          </AccordionButton>
        </div>
    </section>
</template>

<script setup>
import AccordionButton from './AccordionButton.vue';
const props = defineProps({
  title: {
        type: String,
    },
  heading: {
    type: String,
    default: ''
  },
  body: {
    type: String,
    default: ''
  },
  buttons:{
        type: Array,
        default: []
    },
})
</script>

<style scoped lang='scss'>
  section{
    background-color: #DEB881;
  }
  .button-wrapper{
    display: flex;
    margin-top: 2rem;
  }
</style>
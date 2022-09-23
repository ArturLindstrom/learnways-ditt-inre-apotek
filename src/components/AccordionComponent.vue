<template>
    <section ref="background" :class="{olive: buttonClicked == 1, blue : buttonClicked == 2, green: buttonClicked == 3}">
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
        <div class="accordion-container">
            <div class="accordion" v-for="(button,i) in props.buttons" :key="i"
            :class="{
                'selected': isSelected === i + 1,
                'not-selected': isSelected && isSelected !== i + 1,
              }"
              @click.self="toggleAccordion(i)">
              <h5 @click.self="toggleAccordion(i)">
                {{button.heading}}
              </h5>
              <p v-if="isSelected === i + 1">
                {{button.body}}
              </p>
              <p v-if="isSelected === i + 1 " class="read-more" @click="openModal(button.modal)">
                {{button.readMore}}
              </p>
            </div>
        </div>
        
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isSelected = ref(null);

const buttonClicked = ref(0);

const openModal = (modalContent) => {
    store.commit('modalOpen', modalContent);
}


const toggleAccordion = (i) => {
  
  if(isSelected.value === i + 1){
    isSelected.value = null;
  }else{
    isSelected.value = i +1;
    buttonClicked.value = i + 1;
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
  
  .button-wrapper{
    display: flex;
    margin-top: 2rem;
  }
  .accordion-container{
    display: flex;
    gap: 20px
  }

  .accordion{
        width: 350px;
        height: 50px;
        max-height: 50px;
        padding: 10px 5px;
        background-color: transparent;
        border: 2px solid black;
        border-radius: 5px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-top: 42px;
        transition: all 0.7s ease-in;    
    }

  .selected{
    height: auto;
    pointer-events: initial;
    cursor: text;
    max-height: 500px;
    /* transition: max-height 0.5s ease-in;    */
  }

  .not-selected{
    height: 50px;
    /* transition: max-height 0.5s ease-in; */
    overflow: hidden;
  }

  .olive{
    background-color: #BBC19B;
    transition: background-color 0.5s ease-in;

  }

  .blue{
    background-color: #AEA2B2;
    transition: all 0.5s ease-in;
  }

  .green{
    background-color: #A7C6B7;
    transition: all 0.5s ease-in;
  }


</style>
<template>
  <section ref="background" :class="setClass">
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
              <transition>
                <div class="transition">
                  <p>
                    {{button.body}}
                  </p>
                  <p class="read-more" @click="openModal(button.modal)">
                    {{button.readMore}}
                  </p>
                </div>
              </transition>
            </div>
        </div>
        <slot></slot>
        
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isSelected = ref(null);

const buttonClicked = ref(0);

const openModal = (modalContent) => {
    store.commit('modalOpen', modalContent);
}

const setClass = computed(() => {
    return props.id.toLowerCase();
})

const toggleAccordion = (i) => {
  
  if(isSelected.value === i + 1){
    isSelected.value = null;
  }else{
    isSelected.value = i +1;
    buttonClicked.value = i + 1;
  }
  store.commit('setAccordion', isSelected.value)
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
    id: {
        type: String,
        default: ''
    }
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
        max-width: 350px;
        /* height: 50px; */
        max-height: 40px;
        padding: 10px 5px;
        background-color: transparent;
        /* background-color: white; */
        border: 2px solid black;
        border-radius: 5px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-top: 42px;
        transition: max-height 0.7s ease-in;    
        transition: background-color 0.5s ease-in;

    }

  .selected{
    /* height: auto; */
    max-height: 900px;
    pointer-events: initial;
    background-color: transparent;
    cursor: text;
    transition: max-height 1s ease-in 0.5s;
    /* transition: background-color 0.5s ease-in; */
  }

  .funktioner .selected {
    background: #DEB881
  }

  .begrepp .selected {
    background: #AEA2B2
  }

  .not-selected{
    /* height: 50px; */
    max-height: 40px;
    transition: max-height 0.5s ease-in;
    overflow: hidden;
  }

  .transition{
    margin-top: 20px;
  }
  @media screen and (max-width: 768px){
    .accordion-container{
      flex-direction: column;
      
    }

    .not-selected{
      max-height: 30px;
    }

    .accordion{
      max-height: 30px;
      margin-top: 20px;
    }

    .selected{
      max-height: 900px;
    }
  }
    
  


</style>
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
  if(props.id == 'Funktioner'){
    console.log(props.id)
    if(buttonClicked.value == 1){
      return 'olive'
    } else if(buttonClicked.value == 2){
      return 'blue'
    } else if(buttonClicked.value == 3){
      return 'green'
    } else {
      return 'funktioner'
    }
  } 
  else {
    if(buttonClicked.value == 1){
      return 'geyser'
    } else if(buttonClicked.value == 2){
      return 'mischka'
    } else if(buttonClicked.value == 3){
      return 'jet-stream'
    } else {
      return 'begrepp'
    }
  }
})

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

  .not-selected{
    /* height: 50px; */
    max-height: 40px;
    transition: max-height 0.5s ease-in;
    overflow: hidden;
  }

  .transition{
    margin-top: 20px;
  }

  .funktioner {
    background: 
      url('/assets/img/apelsin-inre-apotek.png') left bottom / 20%,
      url('/assets/img/01-gurka.png') bottom 35% right 30%,
      url('assets/img/11-bacteria.png') top 10% right 40%,
      url('assets/img/02-vita-blodkroppar.png') top right,
      url('assets/img/01-signal.png') bottom 30% right 20%;
      background-repeat: no-repeat;
    }
    
    .olive{
      background: 
      url('/assets/img/01-gurka.png') bottom -15% left 40% / 25%,
      url('assets/img/01-ananas.png') top -40% right 25% / 35%,
      url('/assets/img/01-gurka.png') bottom 30% right 12.5% / 15%,
      url('assets/img/01-ananas.png') bottom 30% right 25% / 25%,
      url('/assets/img/apelsin-inre-apotek.png') right -15% bottom -20% / 30%,
      url('/assets/img/apelsin-inre-apotek.png') right -15% top 40% / 25%;
      background-color: #BBC19B;
      background-repeat: no-repeat;
      transition: background-color 0.5s ease-in;

  }

  .blue{
    background: 
    url('/assets/img/01-brain.png') center / 55%,
    url('/assets/img/01-signal.png') top 10% right 10%,
    url('/assets/img/01-signal.png') bottom 20% right 15% / 80px,
    ;
    background-color: #AEA2B2;
    background-repeat: no-repeat;
    transition: background-color 0.5s ease-in;
  }

  .green{
    background-color: #A7C6B7;
    transition: background-color 0.5s ease-in;
  }

  .geyser{
    background-color: #CFE0DF;
    transition: background-color 0.5s ease-in;
  }

  .mischka {
    background-color: #DAD1DD;
    transition: background-color 0.5s ease-in;
  }

  .jet-stream{
    background-color: #B2CCCC;
    transition: background-color 0.5s ease-in;
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
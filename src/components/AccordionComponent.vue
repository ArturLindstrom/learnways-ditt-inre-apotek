<template>
    <section ref="background" :class="{green : buttonClicked == 2, 'blue': buttonClicked == 3}">
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
            <div class="accordion" v-for="(button,i) in props.buttons"
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
  section{
    background-color: #DEB881;
  }
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
        padding: 10px 5px;
        background: transparent;
        border: 2px solid black;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-top: 42px
        
    }

  .selected{
    height: auto;
    pointer-events: initial;
    cursor: text;
  }

  .not-selected{
    height: 50px;
    overflow: hidden;
  }

  .green{
    background-color: #BBC19B;
  }

  .blue{
    background-color: #AEA2B2;
  }

  .v-enter-active{

transition: height 1s;
height: auto;
}
.v-leave-active {
opacity: 1;
}

.v-enter-from,
.v-leave-to
{
opacity: 0;
}
</style>
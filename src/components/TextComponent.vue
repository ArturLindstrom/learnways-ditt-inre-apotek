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
        <p class="read-more"
        @click="openModal">
            {{props.readMore}}
        </p>
    </div>
</section>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();

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
  readMore:{
    type: String,
    default: ''
  },
    modal:{
        type: Object,
        default: {}
    }
})

const modalContent = props.modal

  const openModal = () => {
    store.commit('modalOpen', modalContent )
    console.log(props.modal)
  }



</script>

<style scoped lang='scss'>
section{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    /* background-color: #F0EDE9; */
}
.text-wrapper{
    max-width: 50%;
}
  
</style>
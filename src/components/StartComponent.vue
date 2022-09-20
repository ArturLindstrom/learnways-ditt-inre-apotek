<template>
<section>
    <InformationButton @openInfo="showInfo = !showInfo"/>
    <div class="text-container">
        <h1>{{data.dia_p1_h1}}</h1>
        <h5>
            {{data.dia_p1_ingress}}
        </h5>
        <ButtonComponent type="scroll">{{data.scroll}}</ButtonComponent>
    </div>
    <transition>
        <InformationComponent v-if="showInfo"/>
    </transition>
</section>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import ButtonComponent from './ButtonComponent.vue';
import InformationComponent from './InformationComponent.vue';
import InformationButton from './InformationButton.vue';
import DialogButton from './DialogButton.vue';


const showInfo = ref(false)

const store = useStore();

const data = store.state.data;


</script>

<style scoped lang='scss'>
section{
    background-color: #F4E9D7;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: flex-start; 
    /* padding-left: 140px; */

}

.text-container{
    max-width: 70%;
    /* margin-left: 140px */
}

h1{
    margin-bottom: 40px;
}

h5{
    margin-bottom: 40px;
}



.v-enter-active,
.v-leave-active {
  transition: transform 1s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
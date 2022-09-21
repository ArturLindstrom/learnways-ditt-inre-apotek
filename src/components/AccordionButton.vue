<template>
    <div class="accordion" @click="toggleAccordion">
        <h5>{{props.heading}}</h5>
        
        <transition>
        <p v-if="isOpen">
            {{props.body}}
        </p>
    </transition>
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    heading: {
        type: String,
        default: ''
    },
    body: {
        type: String,
        default: ''
    }
})
const isOpen = ref(false);



</script>

<style scoped lang='scss'>
    .accordion{
        width: 350px;
        padding: 10px 5px;
        background: transparent;
        border: 2px solid black;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        
    }

    .v-enter-active{

        transition: opacity 1s;
        transition-delay: 0.5s;
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
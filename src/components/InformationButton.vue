<template>
<button class="button" 
@click="openInfo"
:class="{active: buttonToggle}"
>
    <p v-if="!buttonToggle">i</p>
</button>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const emit = defineEmits(['openInfo'])
const buttonToggle= ref(false)

const openInfo = () => {
    store.commit('toggleNav')
    buttonToggle.value = !buttonToggle.value
    emit('openInfo')
}

</script>

<style scoped lang='scss'>
    .button{
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 54px;
        margin-left: 54px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 24px;
        color: #5E5C7C;
        border: 1px solid #535271;
        background: white;
        cursor: pointer;
    }
 .active{

        background: url(assets/navButton/navButtonActive.svg) center no-repeat ;
        border-radius: 0%;
    }

    @media screen and (max-width: 768px) {
        .button{
            margin-top: 8px;
            margin-left: 8px;
        }
    
        
    }
</style>
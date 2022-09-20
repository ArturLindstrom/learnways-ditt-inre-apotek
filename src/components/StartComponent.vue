<template>
<section>
    <InformationButton @openInfo="showInfo = !showInfo"/>
    <DialogButton></DialogButton>
    <div class="text-container">
        <h1>Ditt inre apotek</h1>
        <h4>
            I och på din kropp finns det flera trillioner mikrober, den så kallade mikrobiotan. Bakterier, virus, svamp och uråldriga livsformer, varav de flesta är goda och viktiga för din hälsa.
        </h4>
        <ButtonComponent type="scroll">Börja skrolla</ButtonComponent>
    </div>
    <transition>
        <InformationComponent v-if="showInfo"/>
    </transition>
</section>
</template>

<script setup>
    import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
import InformationComponent from './InformationComponent.vue';
import InformationButton from './InformationButton.vue';
import DialogButton from './DialogButton.vue';


const showInfo = ref(false)

</script>

<style scoped lang='scss'>
section{
    background-color: #F4E9D7;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: flex-start; 

}

.text-container{
    max-width: 850px;
    margin-left: 140px
}

h1{
    margin-bottom: 40px;
}

h4{
    margin-bottom: 40px;
}



.v-enter-active,
.v-leave-active {
  transition: transform 1s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(110%);
}
</style>
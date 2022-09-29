<template>
  
  <LoaderComponent id="loader" v-show="!pageLoaded"/>
  <div class="app" v-cloak>
    <NavComponent />
    <RouterView />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';
import LoaderComponent from './components/LoaderComponent.vue';

const pageLoaded = ref(false)

document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                // document.querySelector(
                //   ".app").style.visibility = "hidden";
                // document.querySelector(
                //   "#loader").style.visibility = "visible";
            } else {
                // document.querySelector(
                //   "#loader").style.display = "none";
                  pageLoaded.value = true
                // document.querySelector(
                //   ".app").style.visibility = "visible";
            }
        };

</script>


<style lang="scss">
[v-cloak]{
  display: none;
}

/* #app{
  width: 100%;
} */
  
</style>


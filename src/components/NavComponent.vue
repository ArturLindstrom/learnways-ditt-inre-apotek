<template>
  <div class="app" v-if="showNav">
    <button class="nav-button"
    @click="navToggle = !navToggle"
    :class="{ 'nav-button-active': navToggle }"
    >
  </button>
    <transition>
      <nav v-if="navToggle">
        <ul >
          <div class="line"></div>
          <li v-for="route in routes" :key="route">
            {{ route }}
            <a href="">
              <div class="ball"></div>
            </a>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex';
  import { ref, computed } from 'vue';

  const store = useStore();

  const routes = ['Start', 'Historia', 'Arter', 'Funktioner', 'Dysbios', 'Antibiotika', 'Probiotika', 'Påverkan', 'Avslutning']


  const showNav = computed(() => store.state.showNav)

  const navToggle = ref(false)
</script>

<style scoped lang='scss'>
  

  nav{
    z-index: 3;
    position: fixed;
    top: 0;
    right: 0;
    padding-top: 110px;
    padding-right:54px;
    height: 100%;
    background-color: white;
    width: 200px;
    box-shadow: -9px 0px 7px 0px rgba(0,0,0,0.37);   }
  ul{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    & .line{
      height: 98%;
      z-index: -1;
      position: absolute;
      border-left: 1px dotted black;
      right: 4.5px;
      top: 3px;
    }

  }
  .nav-button{
    z-index: 999;
    margin-top: 54px;
    margin-right: 54px;
    position: fixed;
    top: 0;
    right: 0;
    background: url(assets/navButton/navButton.svg) center no-repeat ;
    width: 40px;
    height: 40px;
    transition: all 0.5s;
    &:hover{
      transition: all 0.5s;
      filter: brightness(0.5);
      cursor: pointer;
    }
  }

  .nav-button-active{
    background: url(assets/navButton/navButtonActive.svg) center no-repeat ;
    transition: background 1s;
  }
  
  li{

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    &:hover{
      cursor: pointer;
      text-decoration: underline;
    }
    &:hover a .ball{
      background-color: #707070;
    }
  }

  a{
    text-decoration: none;
  }

  .ball
  {
    width: 9px;
    height: 9px;
    background: #F5F5F5;
    border: 1px solid #707070;
    border-radius: 50%;
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
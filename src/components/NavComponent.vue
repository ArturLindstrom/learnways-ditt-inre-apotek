<template>
  <div v-if="showNav">
    <button
      class="nav-button"
      @click="navToggle = !navToggle"
      :class="{ 'nav-button-active': navToggle }"
    ></button>
    <transition>
      <nav v-if="navToggle">
        <ul>
          <div class="line"></div>
          <li v-for="route in routes" :key="route">
            <a :href="'#' + route" @click="navToggle = !navToggle">
              {{ route }}
              <div
                class="ball"
                :class="currentId == route ? 'active' : ''"
                :style="currentId == route ? { backgroundColor: currentBackgroundColor } : ''"
              >
            </div>
            </a>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";

const store = useStore();

const routes = [
  "Start",
  "Historia",
  "Arter",
  "Funktioner",
  "Dysbios",
  "Antibiotika",
  "Begrepp",
  "Avföring",
  "Påverkan",
  "Avslutning",
];

const showNav = computed(() => store.state.showNav);

const navToggle = ref(false);

const currentId = computed(() => store.state.currentSection.id);

//checks the current section's background color and applies it to the active nav link
const currentBackgroundColor = computed(
  () => store.state.currentSection.dataset.color
);
</script>

<style scoped lang="scss">
nav {
  -webkit-tap-highlight-color: transparent;
  z-index: 3;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 110px;
  padding-right: 54px;
  height: 100%;
  background-color: white;
  width: 140px;
  box-shadow: -9px 0px 7px 0px rgba(0, 0, 0, 0.37);
}
ul {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  & .line {
    height: 98%;
    z-index: -1;
    position: absolute;
    border-left: 1px dotted black;
    right: 4.5px;
    top: 3px;
  }
}
.nav-button {
  -webkit-tap-highlight-color: transparent;
  all: unset;
  z-index: 999;
  margin-top: 54px;
  margin-right: 54px;
  position: fixed;
  top: 0;
  right: 0;
  background: url(/assets/navButton/navButton.svg) center no-repeat white;
  background-size: 105%;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  transition: all 0.5s;
  &:hover {
    transition: all 0.5s;
    filter: brightness(0.9);
    cursor: pointer;
  }
}

.nav-button-active {
  background: url(/assets/navButton/navButtonActive.svg) center no-repeat;
  background-size: 105%;
  border: 1px solid black;
  transition: background 1s;
}

a {
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:hover .ball {
    background-color: #707070;
  }
  &:visited {
    color: black;
  }
}

li {
  list-style: none;
}

a:has(.active) {
  text-decoration: underline;
}

.ball {
  width: 9px;
  height: 9px;
  background: #f5f5f5;
  border: 1px solid #707070;
  border-radius: 50%;
  scale: 1;
  transition: all 1.5s ease;
}

.active {
  scale: 1.4;
  transition: all 0.2s ease;
}

.v-enter-active,
.v-leave-active {
  transition: transform 1s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(110%);
}

@media screen and (max-width: 768px) {
  .nav-button {
    margin-right: 8px;
    margin-top: 8px;
    width: 30px;
    height: 30px;
    background-size: cover;
  }

  nav {
    width: 40%;
  }
}
</style>

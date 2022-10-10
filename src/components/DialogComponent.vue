<template>
  <section class="wrapper" id="dialog">
    <div class="text-container">
      <p class="page-title">{{ data.dia_i_02 }}</p>
      <h2>
        {{ data.dia_02_h2 }}
      </h2>
      <p>
        {{ data.dia_02_p1 }}
      </p>
      <p class="read-more" @click="openModal" @keyup.enter="openModal" tabindex="0">
        {{ data.dia_02_p2 }}
      </p>
      <p class="open">
        {{ data.dia_02_open }}
      </p>
    </div>

    <div class="dialog-wrapper">
      <img class="woman" src="/assets/img-min/apotek-kvinna-fix.png" alt="" />

      <!-- three loops that renders 12 + 12 yellow pollen particles and 36 drops, to be (kind of randomly) positioned and animated with gsap -->
      <img v-for="grain in 12" class="pollen pollen-left" src="/assets/img-min/pollen.png" alt="" />
      <img v-for="grain in 12" class="pollen pollen-right" src="/assets/img-min/pollen.png" alt="" />
      <img v-for="drop in 36" class="drop" src="/assets/img-min/drop.png" alt="" />
      <div
        class="button-container"
        v-for="(button, i) in 4"
        :class="'dialog-button' + (i + 1)"
        :key="button"
      >
        <button
          @click="toggleDialog(i)"
          :class="{ 'active-button': dialogShown === i + 1 }"
        ></button>
        <transition name="scale">
          <div class="dialog-content" v-if="dialogShown == i + 1">
            <img src="/assets/img/info-line.svg" alt="" class="dotted-line" />
            <transition name="text">
              <span>
                {{ data[`dia_hot_0${i + 1}`] }}
              </span>
            </transition>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const store = useStore();

const data = store.state.data;

const dialogShown = ref(0);

//starts animations when the component is mounted
onMounted(() => {
  pollenSpread();
  drop();
})

//construct object to send to modal
const modalContent = {
  heading: data.dia_popup_h_p02,
  body: data.dia_popup_p_p02,
};

const openModal = () => {
  store.commit("modalOpen", modalContent);
};

//controls which dialog is shown and closes the rest
const toggleDialog = (i) => {
  if (dialogShown.value == i + 1) {
    dialogShown.value = 0;
  } else {
    dialogShown.value = i + 1;
  }
};

const drop = () => {
  gsap.set(".drop", 
    {
      x: "random(50, 400)",
      y: "random(0, 900)",
      scale: "random(0.5, 1.5)",
    })
  tl.to(".drop", {
    y: "random(-1000, 500)",
  });
}

const tl = gsap.timeline({
    scrollTrigger: {
      start: 0,
      end: "200%",
      scrub: 2
    },
  });


const pollenSpread = () => {
  gsap.to('.pollen', {
    x: "random(-75, 75)",
    y: "random(-100, 100)",
    scale: "random(0.75, 1.25)",
    duration: 10,
    repeat: -1,
    repeatRefresh: true,
  })
}
</script>

<style scoped lang="scss">
.wrapper {
  background-size: 90%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  place-items: center;
}

.dialog-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 100%;
}

.woman {
  z-index: -1;
  transform: scale(1.4);
  top: -30%;
  right: 0%;
}

.pollen {
  position: absolute;
}

.pollen-left {
  bottom: 10%;
  left: 30%;
}

.pollen-right {
  bottom: 10%;
  right: 40%;
}

.drop {
  position: absolute;
}


.button-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  border: none;
  z-index: 1;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #eeeae6;
  background: url("/assets/img/ICON-HOTSPOT.svg") no-repeat center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  transition: transform 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
}

.active-button {
  transform: rotate(45deg) scale(1.1);
  transition: all 0.5s ease-in-out;
}

.open {
  font-weight: 400;
  margin-top: 15px;
}

.dialog-buttons {
  position: absolute;
}

.dialog-button1 {
  top: -60%;
  left: 2%;
}

.dialog-button2 {
  top: -54%;
  left: -10%;
}

.dialog-button3 {
  top: -47%;
  left: -4%;
}

.dialog-button4 {
  top: -42%;
  left: -5%;
}

.dialog-content {
  position: absolute;
  transform: translate(50%);
  display: flex;
}

.dotted-line {
  width: 30%;
}

span {
  border-radius: 5px;
  display: block;
  width: 300px;
  background-color: white;
  padding: 10px;
  transform: translate(-20px);
  font-size: 18px;
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.7s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0.1);
}

@media screen and (max-width: 1050px) {
  .wrapper {
    grid-template-columns: 1fr;
    place-items: start;
   
  }

  .dialog-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
  }

  .woman {
    z-index: -1;
    position: static;
    width: 200%;
    margin-top: -120px;
    margin-left: 70px;
  }

  .dotted-line {
    width: 30%;
  }

  span {
    width: 180px;
  }

  .dialog-button1 {
    top: -68%;
    left: -4%;
  }

  .dialog-button2 {
    top: -58%;
    left: 0%;
  }

  .dialog-button3 {
    top: -53%;
    left: -5%;
  }

  .dialog-button4 {
    top: -50%;
    left: -3%;
  }
}
</style>
